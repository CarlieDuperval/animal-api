import express from 'express'
import { getAllAnimals, createAnimal , updateAnimal} from './src/animal.js';

const app = express();
app.use(express.json())

app.get('/animals', async (req, res) => {


    try {
        const result = await getAllAnimals()
        res.status(200).send(result)
     } catch (error) {
         res.status(500).send(error)
        }
    //res.send('Dogs')

})

app.post('/animals', async (req, res) => {
    const animal = req.body;

    try{
        const result = await createAnimal(animal)
        res.status(201).send(result)
    }catch (error){
        res.status(500).send(error)
    }

    })
    
    //res.send(`${animal.name} has been added`)

// when we hane : 
    app.patch('/animals/:id', async (req, res) => {
        const updateInput = req.body
        const { id } = req.params
        // const id = req.params.id


        if(!updateInput){
            res.status(400).send("Empty body")
            return
        }
        try {
        const result = await updateAnimal(id, updateInput)
        res.status(202).send(result)
        }catch (error){
            res.status(500).send(error)

        }
    })






const port = 5600
app.listen(port, () => {
    console.log(`We are listening ${port}`)
} )

