import React, { useRef } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const BowlLitMaterial = shaderMaterial(
  {
    // Color Uniforms FF8576
    uLitColor: new THREE.Color("#FFA092"),
    uShadeColor: new THREE.Color("#FF8576"),
    uHighlightColor: new THREE.Color("#FFFFFF"),
    // uLitColor: new THREE.Color("#1e1e1e"),
    // uShadeColor: new THREE.Color("#000"),
    // uHighlightColor: new THREE.Color("#FFFFFF"),
    // Lighting Uniforms
    lightPos: new THREE.Vector3(1, 1, 1),
    viewDir: new THREE.Vector3(0, 0, 1),
    shininess: 1.0, // Controls the tightness of the highlight
  },
  /*glsl*/ `
      // VERTEX SHADER
      varying vec3 vPosition;
      varying vec3 vNormal; 
      
      void main() {
        // Pass the vertex normal, transformed by the normal matrix
        vNormal = normalize(normalMatrix * normal);
        
        // Transform local position to world space
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vPosition = worldPosition.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  /*glsl*/ `
      // FRAGMENT SHADER
      varying vec3 vPosition;
      varying vec3 vNormal; 
      
      // Uniforms
      uniform vec3 uLitColor;
      uniform vec3 uShadeColor;
      uniform vec3 uHighlightColor;
      uniform vec3 lightPos;
      uniform vec3 viewDir; 
      uniform float shininess;
  
      void main() {
        // --- LIGHTING CALCULATION ---
        vec3 N = normalize(vNormal);
        vec3 L = normalize(lightPos - vPosition);
        vec3 V = normalize(viewDir - vPosition);
        
        // 1. Calculate NdotL for diffuse light (0 to 1)
        float NdotL = max(dot(N, L), 0.0);
        
        // 2. Calculate Specular (Highlight) term
        vec3 R = reflect(-L, N); 
        float specularTerm = pow(max(dot(R, V), 0.0), shininess);
        
        
        // --- FLAT COLOR LOGIC ---
        
        vec3 finalColor;
        
        // 1. Highlight Pass: Check for a sharp specular spot
        if (specularTerm > 0.95) { // Use a high threshold for a tiny, sharp highlight
            finalColor = uHighlightColor; // #FFFFFF
        } 
        // 2. Shaded/Lit Pass: Use step function for a sharp divide
        else {
            // Create a sharp step: if NdotL > 0.3, result is 1.0 (LIT), else 0.0 (SHADED)
            // The 0.3 threshold controls where the shadow line falls.
            float lightingStep = step(0.3, NdotL); 
            
            // Mix between the shaded color and the lit color based on the sharp step
            finalColor = mix(uShadeColor, uLitColor, lightingStep); 
        }
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
);

extend({ BowlLitMaterial }); // Register the material
// Use the BowlLitMaterial defined above
function BowlMaterial({ lightPosition, ...props }) {
  const materialRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    // 1. Check if the material object (materialRef.current) is ready.
    if (materialRef.current) {
      const material = materialRef.current;

      // 2. Check for the existence of the .uniforms object.
      if (material.uniforms) {
        const uniforms = material.uniforms; // <-- 🎯 Access the uniforms object

        // 3. Check if the required uniforms exist *inside* the uniforms object.
        // Now using 'uniforms.lightPos' instead of 'material.lightPos'
        if (uniforms.lightPos && uniforms.viewDir) {
          // Update viewDir (Camera Position)
          // Accessing uniforms.viewDir.value
          uniforms.viewDir.value.copy(camera.position);

          // Update lightPos (Need to check the prop lightPosition too)
          if (lightPosition) {
            // Accessing uniforms.lightPos.value
            uniforms.lightPos.value.copy(lightPosition);
          }
        }
      }
    }
  });

  return (
    <bowlLitMaterial
      ref={materialRef}
      attach="material"
      // Pass the fixed color props

      // uBaseColor={new THREE.Color("#FFC083")}
      uBaseColor={new THREE.Color("#FFA092")}
      uHighlightColor={new THREE.Color("#FFFFFF")}
      // Ensure the material can receive the light (DoubleSide helps for geometry issues)
      side={THREE.DoubleSide}
      {...props}
    />
  );
}

export default BowlMaterial;
