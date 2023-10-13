<template>
    <!-- This block can be refactored into a component, but I'm sleepy-->
    <div class="grid-control">
        <!-- Disabled the paging, as the rendering the images in the main page for 60 pokemon is the biggest performance hit -->
        <div v-if="false">
            <button @click="pageDown">LEFT</button>
            Page: {{ page + 1 }}
            <button @click="pageUp">RIGHT</button>
        </div>
        <div>Filter The First 60 Pokemons:</div>
        <!--
            Ideally, we want to wait a couple of seconds to apply the filter after the last key stroke.  Huge performance issue due to loading the
            sprites.  Watching the input model causes the reactivity to rerender on each keystroke.  Lodash debounce may be a good tool, but can't
            figure out how to use it with NUXT/TS.  Tried watching the variable and prevent the update, but lacking documentation.  Decided to 
            just throw a button to manually update the filter on command.
        -->

        <!-- Ignore above, going to simply base on the take home code project -->
        <input v-model="userInput" placeholder="Type Here, try Char"/>
        <!-- <button @click="updateFilteredString">Search</button> -->

    </div>
    <div class="grid-container">
        <div v-for="pokemon in pokemons.results">
            <NuxtLink :to="`/${pokemon.name}`">
                <PokemonThumbnail :pokemon-name="pokemon.name" :filteredString="userInput" />
            </NuxtLink>
        </div>  
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    });

    interface Pokemon {
        name: string,
        url: string
    };

    // const filteredString = ref<string>("");
    const userInput = ref<string>("");

    const page = ref<number>(0);
    /* Instruction just wanted the first 60 pokemon and limit on that. */
    const { pending, data: pokemons } = useFetch<Pokemon>("https://pokeapi.co/api/v2/pokemon?limit=60");

    /* Remove paging to just stick to the first 60 */

    // const pageDown = () => {
    //     if (page.value > 0) page.value--;        
    // };

    // const pageUp = () => {        
    //     if (page.value < 21) page.value++;
    // };

    // const updateFilteredString = () => {
    //     filteredString.value = userInput.value;
    // }

    // const filtered = computed<Pokemon[]>(() => {
    //     const myFiltered: Pokemon[] = [];
    //     const myLimit: Pokemon[] = [];
    //     // lack of typescript experiences really showing here
    //     pokemons["_rawValue"].results.forEach(function (value: any) {
    //         if ((filteredString.value != "" && value.name.includes(filteredString.value.toLocaleLowerCase())) || filteredString.value == "") {
    //                 myFiltered.push({ name: value.name, url: value.url });
    //         }            
    //     });
    //     let count: number = 0;
    //     let offset: number = page.value * 60;
    //     myFiltered.forEach(function (value: Pokemon) {
    //         if (myLimit.length < 60) {
    //             if (count >= offset) myLimit.push({ name: value.name, url: value.url });
    //         }
    //         else {
    //             return;
    //         }            
    //         count++;
    //     });
    //     console.log(myLimit);
    //     return myLimit;
    // });

    // const computedKey = computed(() => {
    //     return page.value + filteredString.value;
    // });
</script>

<style scoped>
    .grid-container {
        padding-bottom: 1.25cm;
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    .grid-container > div:has(> .render-me) {
        background-color: #f5efef;
        text-align: center;
        padding: 20px;
        border: 1px solid #777;
    }
    .grid-control {
        text-align: center;
        padding-bottom: .5cm;
        font-size: .75cm;
    }
</style>