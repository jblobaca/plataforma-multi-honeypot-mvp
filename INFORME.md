# Informe académico del prototipo

**Plataforma multi-honeypot con Machine Learning para Threat Intelligence en una empresa.**  
Plan de Trabajo de Investigación para optar el Título Profesional de Ingeniero en Ciberseguridad.  
Autor: Jorge Luis Oscar Balarezo Cárdenas. Asesor: Dr. Even Deyser Perez Rojas.  
Universidad San Ignacio de Loyola, Lima, Perú, 2026.

- Repositorio: https://github.com/jblobaca/plataforma-multi-honeypot-mvp
- Despliegue: https://plataforma-multi-honeypot-mvp.vercel.app

## 1. Del plan de trabajo al MVP

El plan de trabajo formula un problema cuantitativo y experimental: ¿en qué medida una plataforma multi-honeypot asistida por inteligencia artificial mejora la generación de Threat Intelligence accionable en la infraestructura de red de Intercert Latam? La hipótesis general afirma una reducción de al menos 50% en la latencia de detección y una precisión de correlación superior al 85%, con más de 500 IOCs únicos en 30 días.

Ese documento es necesario para la tesis, pero no basta para validar la idea como producto. La clase exige traducir la investigación a un Producto Mínimo Viable: una pieza pública, desplegable y revisable. Este informe cubre esa traducción. El prototipo no ejecuta honeypots reales ni captura tráfico de terceros; muestra el relato, el canvas y un dashboard de demostración con datos sintéticos, coherente con la ética del plan (red simulada, autorización institucional y Ley N.° 29733).

## 2. Problema, objetivos y caso

Intercert Latam certifica normas ISO (9001, 14001, 27001) y gestiona información de alto valor. Kaspersky Lab (2022) reporta que el 65% de las organizaciones latinoamericanas ha enfrentado al menos una amenaza avanzada; León et al. (2024) muestran que las políticas nacionales no se traducen aún en controles técnicos como honeypots. Los mecanismos por firma y regla estática llegan tarde. El vacío de literatura es concreto: no hay estudios que integren honeypots multi-protocolo, machine learning y ELK Stack en un entorno enterprise latinoamericano certificado ISO.

El diseño es pre-experimental (O1 → X → O2), con Design Science Research y un híbrido CRISP-DM + Scrum. La arquitectura objetivo tiene cinco capas: captura (T-Pot), ingesta (Logstash), almacenamiento (Elasticsearch), análisis (LSTM, CNN, Naive Bayes) e inteligencia (Kibana + MISP). El MVP de esta entrega cubre la quinta capa: visualización y relato de valor.

## 3. Análisis de lo visto en clase

Esta sección responde de forma explícita al encargo de incorporar en el informe el análisis de las herramientas trabajadas en clase y su aplicación al plan de investigación.

### 3.1 ODS 9 como marco, no como etiqueta

En clase se insistió en alinear el proyecto a un Objetivo de Desarrollo Sostenible antes de dibujar árboles o canvas. El ODS 9 (industria, innovación e infraestructura) no es un logo de portada: la meta 9.1 pide infraestructura resiliente y la 9.5 pide capacidad tecnológica. Un ransomware o una exfiltración en una certificadora ISO rompe ambas. El aporte del proyecto no es “tener un honeypot”, sino acortar el dwell time y producir inteligencia propia, es decir, resiliencia medible. ODS 16 (instituciones sólidas frente al ciberdelito) y ODS 8 (continuidad del empleo y de la operación) quedan como apoyo, no como eje.

Lo que cambia al aplicar este marco: el problema deja de ser solo informático (“faltan alertas”) y pasa a ser de desarrollo (“la infraestructura digital de la empresa no es resiliente”). Eso obliga a métricas de resultado —MTTD, IOCs accionables, precisión— y no solo a métricas de actividad —número de contenedores levantados—.

### 3.2 Árbol de problemas y árbol de objetivos

El árbol de problemas coloca en el centro la detección tardía por falta de Threat Intelligence proactiva. Abajo, tres causas: defensa reactiva, ausencia de señuelos y falta de ML sobre telemetría. Arriba, efectos: respuesta tardía, mayor dwell time, incidentes de alto impacto, TI genérica y, al final, falla de las metas 9.1 y 9.5. El árbol de objetivos es el espejo: detección temprana, plataforma multi-honeypot, motor ML e integración al SOC.

Análisis: esta herramienta evitó empezar por la tecnología (T-Pot) y forzó a escribir el problema en una sola frase. Sin el árbol, el riesgo era construir quince honeypots que nadie usa. Con el árbol, cada bloque del MVP Canvas tiene padre metodológico: el problema del canvas es el nodo rojo; la solución es el conjunto de medios verdes; las métricas son la forma de saber si el objetivo central se cumple.

### 3.3 Mapa de empatía

El mapa no se centró en “la empresa” sino en Carlos Mendoza, analista SOC / Threat Intelligence Lead. Piensa que si el atacante ya está dentro llegó tarde; oye al CISO pedir proactividad y al SIEM saturado de ruido; ve dashboards sin priorizar; pide IOCs y TTPs de su propia red; le duele el falso negativo y aspira a evidencia para justificar bloqueos.

Análisis: el mapa de empatía corrige un sesgo típico de tesis técnicas. El usuario no quiere un paper sobre LSTM; quiere menos ruido, más evidencia y un feed que hable de su red. Por eso el MVP no es el modelo de deep learning, sino el dashboard que un analista puede leer en cinco minutos. La persona del mapa también explica el canal: GitHub y Vercel sirven al docente; la demo del dashboard sirve a Carlos. Si el prototipo no es legible para ese rol, el canvas está mal cerrado.

### 3.4 MVP Canvas / Lean Canvas

El canvas de Ash Maurya sustituye el plan de negocio largo por nueve hipótesis. En clase se enfatizó no enamorarse del bloque Solución. Aplicado aquí, la tesis completa (15 instancias T-Pot, 30 días, panel de 20 analistas) es el producto deseado; el MVP es más estrecho: publicar el relato, el canvas y una interfaz de inteligencia con las métricas del experimento.

El orden de llenado importó. Primero problema y cliente (Intercert + analista SOC). Después la propuesta de valor: inteligencia propia y temprana, on-premises, para empresas ISO. Recién entonces la solución mínima. Las métricas clave no se inventaron para el canvas: salen del plan (Ns, TA, IOC_u, precisión, MTTD). La ventaja injusta no es “usamos IA”; es el acceso al caso ISO en Perú y el vacío de datasets latinoamericanos. Si esa ventaja no se sostiene en el trabajo de campo, el canvas deberá reescribirse: esa es precisamente la utilidad de la herramienta.

### 3.5 GitHub y Vercel como evidencia, no como adorno

Publicar en GitHub convierte el informe en un artefacto versionado: el docente puede ver el código, el README y el historial. Desplegar en Vercel convierte el canvas en algo que se abre en un navegador, sin instalar Node ni clonar el repo. En términos de Lean Startup, es el ciclo construir–medir–aprender en versión académica: construir el prototipo, medirlo con la revisión de clase y el comentario del caso, aprender si el relato de valor se entiende.

Límite honesto: el despliegue no valida todavía H1, H2 ni H3 del plan. Valida una hipótesis previa, de producto: “un SOC y un docente pueden entender, en una página, qué problema resolvemos y con qué métricas lo vamos a probar”. Sin esa hipótesis, el experimento de 30 días corre el riesgo de medir bien una solución que nadie pidió.

### 3.6 Síntesis crítica

Lo visto en clase obliga a tratar la tesis como un sistema de hipótesis, no como una lista de tecnologías. ODS → árbol → empatía → canvas → repositorio → despliegue es una cadena. Si se rompe un eslabón, el siguiente miente: un canvas bonito sin empatía describe un producto para el autor, no para el SOC; un dashboard en Vercel sin árbol de problemas es una interfaz sin causa. El siguiente paso, ya fuera de esta entrega, es confrontar el canvas con Intercert Latam (autorización, red simulada, panel de analistas) y solo entonces ejecutar T-Pot.

## 4. Alcance ético del prototipo

El plan restringe los honeypots a una red simulada, con autorización formal y sin afectar sistemas de terceros. Este MVP respeta ese límite: no incluye procedimientos de ataque, no expone credenciales y etiqueta los eventos del dashboard como demostración. Los datos reales del experimento se tratarán conforme a la Ley N.° 29733.

## 5. Conclusión de la entrega

Se carga el MVP Canvas, se publica el informe en GitHub y se entrega el enlace de Vercel. El análisis de clase queda integrado al informe: las herramientas no se listan, se usan. El prototipo deja el plan de trabajo en estado demostrable y prepara el experimento de 30 días sobre una hipótesis de producto ya explicitada.
