<template>
    <div>
        <!-- Tricky, because of the hyphen in the json payload, gotta use the bracket notation -->
        <img :src="pokemon.sprites.other['official-artwork']['front_default']" />     
    </div>
    <div>
        Name: {{ capitalizedFirstCharacter(pokemon.name) }}
    </div>
    <div>
        Height: {{ pokemon.height }}
    </div>
    <div>
        Weight: {{ pokemon.weight }}
    </div>
    <div>
        Abilities:
        <template v-for="(item, count) in pokemon.abilities">
            <template v-if="count > 0">,</template>
            {{ capitalizedFirstCharacter(item.ability.name) }}
        </template>
    </div>
</template>

<script setup lang="ts">
    const { name } = useRoute().params;
    const { capitalizedFirstCharacter } = utils();

    definePageMeta({
        layout: 'default'
    });

    const { data: pokemon } = await useFetch('https://pokeapi.co/api/v2/pokemon/' + name);
</script>

<style scoped>
    div {
        text-align: center;
        font-size: 1.25cm;
    }
</style>