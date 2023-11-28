// On importe le contrat SimpleStorage.sol qui contient la logique de stockage de données
const simpleStorage = artifacts.require('SimpleStorage.sol');

// On crée un test avec le framework Mocha
contract('SimpleStorage', () => {
    // On définit un scénario de test qui vérifie que la mise à jour des données fonctionne
    it('Should update data', async () => {
        // On déploie une nouvelle instance du contrat SimpleStorage
        const storage = await simpleStorage.new()
        
        // On appelle la fonction updateData du contrat avec la valeur 10
        await storage.updateData(10)
        
        // On appelle la fonction readData du contrat pour lire la valeur stockée
        const data = await storage.readData()
        
        // On utilise le framework Chai pour vérifier que la valeur lue est bien égale à 10
        assert(data.toString() === '10')
    })
})
