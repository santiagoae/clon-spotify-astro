<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetings = "";

    if(currentHour < 12){
        greetings = "Buenos días"
    }else if(currentHour < 18){
        greetings = "Buenas tardes"
    }else{
        greetings = "Buenas noches"
    }
</script>

<h1 class="text-4xl text-white font-bold">{greetings}</h1>