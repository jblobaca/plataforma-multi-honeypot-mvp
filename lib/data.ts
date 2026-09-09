export type Severity = "alta" | "media" | "baja";

export const kpis = [
  { label: "Honeypots activos", value: "14/15", hint: "Ns · cobertura multi-servicio" },
  { label: "Tasa de atracción", value: "78%", hint: "TA últimas 24 h" },
  { label: "IOCs únicos", value: "612", hint: "Ventana 30 días" },
  { label: "Precisión ML", value: "88%", hint: "Correlación validada" },
  { label: "MTTD", value: "4.2 h", hint: "Media de detección" },
  { label: "Eventos", value: "18 430", hint: "Censo de interacciones" },
];

export const honeypots = [
  { id: "hp-01", name: "Cowrie", service: "SSH / Telnet", status: "activo", events: 4821, last: "hace 2 min" },
  { id: "hp-02", name: "Dionaea", service: "SMB / FTP / HTTP", status: "activo", events: 3104, last: "hace 4 min" },
  { id: "hp-03", name: "Mailoney", service: "SMTP", status: "activo", events: 906, last: "hace 11 min" },
  { id: "hp-04", name: "RDPY", service: "RDP", status: "activo", events: 1440, last: "hace 6 min" },
  { id: "hp-05", name: "Ciscoasa", service: "VPN", status: "activo", events: 512, last: "hace 19 min" },
  { id: "hp-06", name: "ElasticPot", service: "Elasticsearch", status: "activo", events: 388, last: "hace 8 min" },
  { id: "hp-07", name: "Honeytrap", service: "TCP genérico", status: "activo", events: 2210, last: "hace 3 min" },
  { id: "hp-08", name: "Snare", service: "HTTP industrial", status: "activo", events: 674, last: "hace 14 min" },
  { id: "hp-09", name: "Tanner", service: "HTTP / PHP", status: "activo", events: 801, last: "hace 9 min" },
  { id: "hp-10", name: "Adbhoney", service: "ADB", status: "activo", events: 255, last: "hace 27 min" },
  { id: "hp-11", name: "Conpot", service: "ICS / Modbus", status: "activo", events: 190, last: "hace 33 min" },
  { id: "hp-12", name: "Heralding", service: "Credenciales", status: "activo", events: 1488, last: "hace 5 min" },
  { id: "hp-13", name: "Ipphoney", service: "IPP", status: "activo", events: 97, last: "hace 41 min" },
  { id: "hp-14", name: "Ddospot", service: "Amplificación", status: "activo", events: 1544, last: "hace 7 min" },
  { id: "hp-15", name: "Medpot", service: "HL7", status: "mantenimiento", events: 0, last: "offline" },
];

export const alerts = [
  {
    id: "AL-18430",
    time: "21:04:12",
    sev: "alta" as Severity,
    title: "Fuerza bruta SSH",
    sensor: "Cowrie",
    src: "203.0.113.12",
    score: 0.94,
    model: "LSTM",
    ttp: "T1110",
    status: "abierta",
  },
  {
    id: "AL-18429",
    time: "20:51:03",
    sev: "alta" as Severity,
    title: "Binario dejado en señuelo SMB",
    sensor: "Dionaea",
    src: "198.51.100.44",
    score: 0.91,
    model: "CNN",
    ttp: "T1204",
    status: "abierta",
  },
  {
    id: "AL-18422",
    time: "20:33:41",
    sev: "media" as Severity,
    title: "Reconocimiento SMTP",
    sensor: "Mailoney",
    src: "203.0.113.88",
    score: 0.76,
    model: "Naive Bayes",
    ttp: "T1595",
    status: "triage",
  },
  {
    id: "AL-18418",
    time: "19:18:09",
    sev: "media" as Severity,
    title: "Escaneo HTTP anómalo",
    sensor: "Tanner",
    src: "192.0.2.61",
    score: 0.74,
    model: "LSTM",
    ttp: "T1595.002",
    status: "triage",
  },
  {
    id: "AL-18405",
    time: "18:02:55",
    sev: "baja" as Severity,
    title: "Handshake RDP sin payload",
    sensor: "RDPY",
    src: "198.51.100.7",
    score: 0.31,
    model: "Naive Bayes",
    ttp: "T1021.001",
    status: "descartada",
  },
  {
    id: "AL-18391",
    time: "16:47:22",
    sev: "alta" as Severity,
    title: "Credenciales reutilizadas en varios señuelos",
    sensor: "Heralding",
    src: "203.0.113.201",
    score: 0.89,
    model: "LSTM",
    ttp: "T1078",
    status: "abierta",
  },
];

export const iocs = [
  { type: "ip", value: "203.0.113.12", conf: 0.96, src: "Cowrie", first: "2026-09-08", tags: ["brute-force", "ssh"] },
  { type: "ip", value: "198.51.100.44", conf: 0.93, src: "Dionaea", first: "2026-09-08", tags: ["malware-drop"] },
  { type: "hash", value: "a3c1…9f10", conf: 0.91, src: "Dionaea", first: "2026-09-07", tags: ["binario"] },
  { type: "ip", value: "203.0.113.201", conf: 0.88, src: "Heralding", first: "2026-09-07", tags: ["credential-stuffing"] },
  { type: "ua", value: "masscan/1.3", conf: 0.72, src: "Tanner", first: "2026-09-06", tags: ["recon"] },
  { type: "ip", value: "192.0.2.61", conf: 0.7, src: "Tanner", first: "2026-09-06", tags: ["scan"] },
];

export const models = [
  { name: "LSTM reducido", task: "Secuencias temporales de sesión", f1: 0.91, auc: 0.94, status: "produccion" },
  { name: "CNN simplificada", task: "Patrones en payloads / binarios", f1: 0.88, auc: 0.92, status: "produccion" },
  { name: "Naive Bayes", task: "Clasificación rápida de eventos", f1: 0.81, auc: 0.84, status: "produccion" },
];

export const pipeline = [
  { step: "1. Captura", detail: "15 señuelos T-Pot (Docker) en red simulada" },
  { step: "2. Ingesta", detail: "Logstash: JSON, GeoIP, deduplicación" },
  { step: "3. Índice", detail: "Elasticsearch de eventos e IOCs" },
  { step: "4. Análisis ML", detail: "LSTM · CNN · Naive Bayes (k-fold 5)" },
  { step: "5. Inteligencia", detail: "Scoring, STIX/TAXII hacia MISP, esta consola" },
];
