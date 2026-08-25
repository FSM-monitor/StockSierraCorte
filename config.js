// ============================================================
// config.js - Configuración del Dashboard de Stock
// ============================================================

// URLs de las APIs para cada depósito
window.API_URLS = {
  sierra: 'https://script.google.com/macros/s/AKfycby0mlheCboanya1IQiBzwjrvkUGF4GkHgKDAp_BzNKOEZNmh86n_TbgxQq_UI9Jtrs/exec',
  boero: 'https://script.google.com/macros/s/AKfycbxRn_ZnquPLHnnmZuoPMcYiA9xuuX6akJrdVjGvVWroXjwdZbkfXg4dPHnzz-MLlIVWWg/exec'
};

// Excepciones: códigos de artículos que se miden en "unidades" en lugar de "metros"
// Agrupa por depósito (sierra / boero)
window.EXCEPCIONES_POR_DEPOSITO = {
  sierra: [
    // Ejemplos (reemplaza con los códigos reales de tu sistema):
    // 'ART001',
    // 'ART002'
  ],
  boero: [
    // Ejemplos:
    // 'ART003',
    // 'ART004'
  ]
};

// Nota: Si no tienes excepciones, puedes dejar los arreglos vacíos.
// El sistema usará "metros" por defecto para todos los artículos.
