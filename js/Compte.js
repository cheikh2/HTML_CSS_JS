    /**** Fonction pour griser des champs  ****/

function clientStatus(){
    let status = document.getElementById("employeradio").checked;

        if (status == true) {
            document.getElementById("prenomEmpl").disabled = '';
            document.getElementById("raisonS").disabled = '';
            document.getElementById("adressEmpl").disabled = '';
            document.getElementById("cniEmployeur").disabled = '';
        }
        else{
            document.getElementById("prenomEmpl").disabled = 'disabled';
            document.getElementById("raisonS").disabled = 'disabled';
            document.getElementById("adressEmpl").disabled = 'disabled';
            document.getElementById("cniEmployeur").disabled = 'disabled';  
            }
        }

        /**** Recuperation du formulaire ****/

let myform = document.getElementById("myform");

myform.addEventListener("submit", function(e) {

        /**** Control du numéro agence ****/
    let myAgence = document.getElementById("numAgence");
    let agenceRegex = /^[a-zA-Z0-9-]+$/;

    if (myAgence.value.trim() == "") {
        let myAgenceErr = document.getElementById("missAgence");
            myAgenceErr.innerHTML = "Champ obligatoire";
                myAgenceErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (agenceRegex.test(myAgence.value) == false) {
        let myAgenceErr = document.getElementById("missAgence");
            myAgenceErr.innerHTML = "Numero agence invalide";
                myAgenceErr.style.color = "red";
                    e.preventDefault();
    }
        /**** Control du numéro compte ****/
    let myCompte = document.getElementById("numCompte");
    let compteRegex = /^[a-zA-Z0-9-]+$/;

    if (myCompte.value.trim() == "") {
        let myCompteErr = document.getElementById("missCompte");
            myCompteErr.innerHTML = "Champ obligatoire";
                myCompteErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (compteRegex.test(myCompte.value) == false) {
        let myCompteErr = document.getElementById("missCompte");
            myCompteErr.innerHTML = "Numero compte invalide";
                myCompteErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control de la clé Rib ****/
    let myRib = document.getElementById("cleRib");
    let ribRegex = /^[a-zA-Z0-9-' _]+$/;

    if (myRib.value.trim() == "") {
        let myRibErr = document.getElementById("missRib");
            myRibErr.innerHTML = "Champ obligatoire";
                myRibErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (ribRegex.test(myRib.value) == false) {
        let myRibErr = document.getElementById("missRib");
            myRibErr.innerHTML = "Cle Rib invalide ";
                myRibErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du type de compte ****/
    let myOption = document.getElementById("typeCompte");

    if (myOption.value <= 0) {
        let myOptionErr = document.getElementById("missOption");
            myOptionErr.innerHTML = "Choisir votre compte";
                myOptionErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du prenom ****/
    let myPrenom = document.getElementById("prenom");
    let myRegex = /^[a-zA-Z]+$/;

    if (myPrenom.value.trim() == "") {
        let myPrenomErr = document.getElementById("missPrenom");
            myPrenomErr.innerHTML = "Champ obligatoire";
                myPrenomErr.style.color = "red";
                    e.preventDefault();
    } else if (myRegex.test(myPrenom.value) == false) {
        let myPrenomErr = document.getElementById("missPrenom");
            myPrenomErr.innerHTML = "Prenom invalide";
                myPrenomErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control de l'adresse ****/
    let myAdress = document.getElementById("adress");
    let adressRegex = /^[a-zA-Z0-9_]+$/;

    if (myAdress.value.trim() == "") {
        let myAdressErr = document.getElementById("missAdress");
            myAdressErr.innerHTML = "Champ obligatoire";
                myAdressErr.style.color = "red";
                    e.preventDefault();
    } else if (adressRegex.test(myAdress.value) == false) {
        let myAdressErr = document.getElementById("missAdress");
            myAdressErr.innerHTML = "Adresse invalide";
                myAdressErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du mail ****/
    let myEmail = document.getElementById("email");
    let emailRegex = /^.+@.+\.[a-zA-Z]{2,}$/;

    if (myEmail.value.trim() == "") {
        let myEmailErr = document.getElementById("missEmail");
            myEmailErr.innerHTML = "Champ obligatoire";
                myEmailErr.style.color = "red";
                    e.preventDefault();
    } else if (emailRegex.test(myEmail.value) == false) {
        let myEmailErr = document.getElementById("missEmail");
            myEmailErr.innerHTML = "Email invalide";
                myEmailErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du nom ****/
    let myNom = document.getElementById("nom");
    let nomRegex = /^[a-zA-Z]+$/;

    if (myNom.value.trim() == "") {
        let myNomErr = document.getElementById("missNom");
            myNomErr.innerHTML = "Champ obligatoire";
                myNomErr.style.color = "red";
                    e.preventDefault();
    } else if (nomRegex.test(myNom.value) == false) {
        let myNomErr = document.getElementById("missNom");
            myNomErr.innerHTML = "Nom invalide";
                myNomErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du type de client ****/
    let myType = document.getElementById("typeClient");

    if (myType.value <= 0 ) {
        let myTypeErr = document.getElementById("missTypeClient");
            myTypeErr.innerHTML = "Choisi votre profil";
                myTypeErr.style.color = "red";
                    e.preventDefault();
    } 

        /**** Control de l'adresse ****/
    let myTelephone = document.getElementById("telephone");
    let telephoneRegex = /^(77|78|70|76)[0-9]{7}$/;

    if (myTelephone.value.trim() == "") {
        let myTelephoneErr = document.getElementById("missTelephone");
            myTelephoneErr.innerHTML = "Champ obligatoire";
                myTelephoneErr.style.color = "red";
                    e.preventDefault();
    } else if (telephoneRegex.test(myTelephone.value) == false) {
        let myTelephoneErr = document.getElementById("missTelephone");
            myTelephoneErr.innerHTML = "Telephone invalide";
                myTelephoneErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control de profession ****/
    let myProfession = document.getElementById("profession");
    let professionRegex = /^[a-zA-Z0-9_]+$/;

    if (myProfession.value.trim() == "") {
        let myProfessionErr = document.getElementById("missProfession");
            myProfessionErr.innerHTML = "Champ obligatoire";
                myProfessionErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (professionRegex.test(myProfession.value) == false) {
        let myProfessionErr = document.getElementById("missProfession");
            myProfessionErr.innerHTML = "Profession invalide";
                myProfessionErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du cni ****/
    let myCni = document.getElementById("cni");
    let cniRegex = /^[0-9]{13}$/;

    if (myCni.value.trim() == "") {
        let myCniErr = document.getElementById("missCni");
            myCniErr.innerHTML = "Champ obligatoire";
                myCniErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (cniRegex.test(myCni.value) == false) {
        let myCniErr = document.getElementById("missCni");
            myCniErr.innerHTML = "CNI invalide";
                myCniErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du salaire ****/
    let mySalaire = document.getElementById("salaire");

    if (mySalaire.value.trim() == "") {
        let mySalaireErr = document.getElementById("missSalaire");
            mySalaireErr.innerHTML = "Champ obligatoire";
                mySalaireErr.style.color = "red";
                    e.preventDefault();
    } 
    else if ((mySalaire.value >= 25000 && mySalaire.value <= 2000000) == false) {
        let mySalaireErr = document.getElementById("missSalaire");
            mySalaireErr.innerHTML = "Salaire invalide";
                mySalaireErr.style.color = "red";
                    e.preventDefault();
    }

    let status = document.getElementById("employeradio").checked;

        /**** Control du prenom de l'employeur ****/
    let myPrenomEmpl = document.getElementById("prenomEmpl");
    let employeRegex = /^[a-zA-Z]+$/;

    if (myPrenomEmpl.value.trim() == "" && status == true) {
        let myPrenomEmplErr = document.getElementById("missPrenomEmpl");
            myPrenomEmplErr.innerHTML = "Champ obligatoire";
                myPrenomEmplErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (employeRegex.test(myPrenomEmpl.value) == false && status == true) {
        let myPrenomEmplErr = document.getElementById("missPrenomEmpl");
            myPrenomEmplErr.innerHTML = "Prenom invalide";
                myPrenomEmplErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control de la raison sicial ****/
    let myRaisonS = document.getElementById("raisonS");
    let raisonRegex = /^[a-zA-Z0-9 ]+$/;

    if (myRaisonS.value.trim() == "" && status == true) {
        let myRaisonSErr = document.getElementById("missRaisonS");
            myRaisonSErr.innerHTML = "Champ obligatoire";
                myRaisonSErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (raisonRegex.test(myRaisonS.value) == false && status == true) {
        let myRaisonSErr = document.getElementById("missRaisonS");
            myRaisonSErr.innerHTML = "Raison S invalide";
                myRaisonSErr.style.color = "red";
                    e.preventDefault();
    }


        /**** Control de l'adresse de l'emplyeur ****/
    let myAdressEmpl = document.getElementById("adressEmpl");
    let adressEmRegex = /^[a-zA-Z0-9 _-]+$/;

    if (myAdressEmpl.value.trim() == "" && status == true) {
        let myAdressEmplErr = document.getElementById("missAdressEmpl");
            myAdressEmplErr.innerHTML = "Champ obligatoire";
                myAdressEmplErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (adressEmRegex.test(myAdressEmpl.value) == false && status == true) {
        let myAdressEmplErr = document.getElementById("missAdressEmpl");
            myAdressEmplErr.innerHTML = "Adresse invalide";
                myAdressEmplErr.style.color = "red";
                    e.preventDefault();
    }

        /**** Control du cni de l'employeur ****/
    let myEmployeur = document.getElementById("cniEmployeur");
    let empRegex = /^[0-9]{13}$/;

    if (myEmployeur.value.trim() == "" && status == true) {
        let myEmployeurErr = document.getElementById("missEmployeur");
            myEmployeurErr.innerHTML = "Champ obligatoire";
                myEmployeurErr.style.color = "red";
                    e.preventDefault();
    } 
    else if (empRegex.test(myEmployeur.value) == false && status == true) {
        let myEmployeurErr = document.getElementById("missEmployeur");
            myEmployeurErr.innerHTML = "CNI invalide";
                myEmployeurErr.style.color = "red";
                    e.preventDefault();
    }

});