<script setup>
import Title from '@/components/Title.vue'
import { useFetch } from '@/composables/useFetch'

//const {data} = useFetch("/timestamps/all")

//make array of objects in data
const data = [ {
        "username": "isabelle94",
        
        "number": 1,
        "timeStamp": "2021-08-12 08:00:00",
        
    },
    {
        "number": 2,
        "timeStamp": "2021-08-12 12:00:00",
        
    },
    {
        "number": 3,
        "timeStamp": "2021-08-12 12:30:00",
        
    },
    {
        "number": 4,
        "timeStamp": "2021-08-12 17:00:00",
        
    },

    {
        "total hours": " "
    },
  
    {
        "date": new Date().toLocaleDateString()
    }

]




</script>

<template>
<Title>Daily Timesheet</Title>

<div>{{data[5].date}}</div>


<div>Logged in as {{data[0].username}}
</div>




<table>
    <thead>
        <tr>
            <th>Number</th>
            <th>Time Stamp</th>
        
        </tr>
    </thead>
    <tbody>
        <tr v-for="timestamp in data" :key="timestamp.id">
            <td>{{timestamp.number}}</td>
            <td>{{timestamp.timeStamp}}</td>
         
        </tr>
    </tbody>
</table>




Total number of hours worked:
{{data[4]["total hours"]}}

Planned hours:
{{data[0]["planned hours"]}}

Difference:
{{data[0]["difference"]}}

<button v-on:click="createTimeStamp">Create Time Stamp</button>



</template>


<style>
table {
    border-collapse: collapse;
    width: 100%;
    
    }

    th, td {
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even){background-color: #f2f2f2}

    th {
    background-color: #4CAF50;
    color: white;
    }

    button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }

</style>
