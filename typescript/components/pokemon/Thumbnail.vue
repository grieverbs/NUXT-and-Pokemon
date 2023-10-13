<template>
    <div :class="{'render-me': isWanted }">
        <div :key="pokemon.id" v-show="isWanted">
            <span>{{ pokemon.id }}: </span><span>{{ capitalizedFirstCharacter(pokemon.name) }}</span><img :src="pokemon.sprites.front_default" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const { capitalizedFirstCharacter } = utils();

    interface Props {
        pokemonName: string,
        filteredString: string
    }

    const props = defineProps<Props>();    
    const { pending, data: pokemon } = await useLazyFetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemonName);
    const isWanted = computed<boolean>(() => props.pokemonName.includes(props.filteredString.toLocaleLowerCase()));
    
</script>

<style scoped>
    img {
        vertical-align: middle;
    }
</style>