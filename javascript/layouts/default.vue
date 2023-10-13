<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Pokemons</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div>
            <slot />
        </div>

        <footer>
            <div>We're learning NUXT 3 with POKEMONS!</div>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>    
    div > header > nav > ul > li >a {
        color: darkgreen;
        font-size: 1cm ;
        &:hover {
            background-color: red;
        }
        list-style: none;
    }
    div > header > nav > ul > li {        
        list-style: none;
    }
    div > header {
        text-align: center;
        padding-bottom: 2.5cm;
    }

    footer {
        margin-top: 3cm;
        position:fixed;
        bottom: 0;
        font-size: 1cm;
        text-align: center;
        width: 100%;
        background-color: indigo;
        color: white;
    }
</style>