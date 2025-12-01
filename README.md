# Web Pokémon con React

Este proyecto consiste en crear una PokeApp utilizando React funcional, haciendo uso de Hooks, React Router, Context API y LocalStorage.

## 🚀 Tecnologías utilizadas
- React  
- React Router  
- Hooks: useState, useEffect, useContext, useParams  
- Context  
- Fetch API  
- LocalStorage  


---

# 📌 FASE 1 — Enrutado de la Aplicación

Se implementa navegación con React Router y un Navbar utilizando `<Link />`.

## Rutas

### `/`
Renderiza:
- **SearchContainer**
  - Search  
  - PokemonList  

Al montarse, realiza una llamada inicial a la PokeAPI.

### `/new`
Renderiza:
- **PokemonForm** (formulario para crear nuevos pokemons)

### `/pokemon/:id`
Renderiza:
- **PokemonDetails** (vista detallada del Pokémon)
---

---

# 📌 FASE 2 — Búsqueda de Pokémons

### SearchContainer
- Contiene el estado del input  
- Contiene la lista de pokemons encontrados  
- Renderiza Search + PokemonList  
- Lógica para llamar a la PokeAPI  

### Search
- Input de texto  
- Botón de búsqueda  
- Limpia el input después de la búsqueda  
- Eleva el estado al padre (SearchContainer)

### PokemonList
Renderiza la lista de pokemons buscados.

### PokemonCard
Muestra los datos e imagen del Pokémon.

---

# 📌 FASE 3 — Búsqueda con Debounce

La búsqueda también debe ejecutarse de forma automática al escribir:

- Implementar **debounce** (1–2 segundos sin escribir → buscar)  

---

# 📌 FASE 4 — Alta de Pokémons (Context)

Se utiliza Context  para almacenar globalmente los pokemons creados por el usuario.

### El estado global vive en `App`  
SearchContainer y PokemonForm son consumidores del contexto.

---
# 📌 FASE 5 — Persistencia en LocalStorage

Los pokemons creados deben persistir entre recargas -> Guardar en LocalStorage

## Despliegue en Netlify
https://reliable-monstera-2cc92a.netlify.app/

## Repositorio de GitHub
https://github.com/luciaaroca/poke_app.git

## Perfil de GitHub:
https://github.com/luciaaroca
