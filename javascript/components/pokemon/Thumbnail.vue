<template>
    <div :key="pokemon.id">
        <span>{{ pokemon.id }}: </span>
        <span>{{ capitalizedFirstCharacter(pokemon.name) }}</span>
        <img :src="pokemon.sprites.front_default" />
    </div>
</template>

<script setup lang="js">
    const { capitalizedFirstCharacter } = utils();

    const props = defineProps({
        pokemonName: String
    });

    const { pending, data: pokemon } = await useLazyFetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemonName);
    
</script>

<style scoped>
    img {
        vertical-align: middle;
    }
</style>