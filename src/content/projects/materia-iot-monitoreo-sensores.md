---
title: "Sistema IoT de Monitoreo Ambiental con ESP32"
description: "Red de sensores interconectados para medición de calidad del aire, temperatura y humedad con transmisión MQTT a dashboard central."
category: "academic"
subject: "Sistemas Embebidos y Redes"
semester: "5to Semestre - 2026"
professor: "MSc. Laura Peña"
team: "Equipo de 2 personas"
grade: "Calificación: 10/10"
tags: ["C++", "ESP32", "MQTT", "Node.js", "WebSockets", "IoT"]
image: "/images/projects/iot.svg"
githubUrl: "https://github.com"
featured: false
publishDate: "2026-04-12"
---

## Arquitectura de la Solución

El sistema captura variables ambientales en tiempo real utilizando microcontroladores ESP32 con sensores DHT22 y MQ-135, enviando telemetría mediante el protocolo ligero **MQTT** hacia un broker local y visualizándose en un dashboard reactivo con **WebSockets**.
