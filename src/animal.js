import connect from "./connect.js";

const animalCollection = connect().collection("animals");

export const getAllAnimals = async () => {

  try {
    const snapshot = await animalCollection.get();
    const result = snapshot.docs.map((doc) => {
      const animal = doc.data();
      animal.id = doc.id;
      return animal;
    });

    return result;

    } 
    catch (error) {
    console.error(error);
    }
};

export const createAnimal =  async (animal) => {

    try{
        const result = await animalCollection.add(animal)
        animal.id = result.id
        return animal
    }
    catch (error){
        console.error(error)
    }
    

}
export const updateAnimal = async (id, animal) => {

  try {

  //const result = await animalCollection
  await animalCollection
  .doc(id)
  .update(animal)
return await getAnimalById(id)
  } catch (error){
    console.error(error)
  }
}


export const getAnimalById = async id => {
  try {
    const result = await animalCollection.doc(id).get()
    return {
      id: result.id, 
      ...result.data()
    }
  }catch (error){
    console.error(error)
  }
}