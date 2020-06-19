let myform = document.getElementById("myform");

myform.addEventListener("submit", function(e) {

    let myAgence = document.getElementById("numAgence");
    let agenceRegex = /^[a-zA-Z0-9_]+$/;

    if (myAgence.value.trim() == "") {
        let myAgenceErr = document.getElementById("missAgence");
        myAgenceErr.innerHTML = "le champ numAgence est requis";
        myAgenceErr.style.color = "red";
        e.preventDefault();
    } else if (agenceRegex.test(myAgence.value) == false) {
        let myAgenceErr = document.getElementById("missAgence");
        myAgenceErr.innerHTML = "Numero agence invalide";
        myAgenceErr.style.color = "red";
        e.preventDefault();
    }

    let myCompte = document.getElementById("numCompte");
    let compteRegex = /^[a-zA-Z-\s]+$/;

    if (myCompte.value.trim() == "") {
        let myCompteErr = document.getElementById("missCompte");
        myCompteErr.innerHTML = "le champ Nun Compte est requis";
        myCompteErr.style.color = "red";
        e.preventDefault();
    } else if (compteRegex.test(myCompte.value) == false) {
        let myCompteErr = document.getElementById("missCompte");
        myCompteErr.innerHTML = "Numero compte invalide";
        myCompteErr.style.color = "red";
        e.preventDefault();
    }

    let myRib = document.getElementById("cleRib");
    let ribRegex = /^[a-zA-Z-\s]+$/;

    if (myRib.value.trim() == "") {
        let myRibErr = document.getElementById("missRib");
        myRibErr.innerHTML = "le champ cleRib est requis";
        myRibErr.style.color = "red";
        e.preventDefault();
    } else if (ribRegex.test(myRib.value) == false) {
        let myRibErr = document.getElementById("missRib");
        myRibErr.innerHTML = "Cle Rib invalide ";
        myRibErr.style.color = "red";
        e.preventDefault();
    }

    /*let myOption = document.getElementById("typeCompte");

    if (myRib.value.trim() == "") {
        let myOptionErr = document.getElementById("missOption");
        myOptionErr.innerHTML = "le champ option est requis";
        myOptionErr.style.color = "red";
        e.preventDefault();
    }*/

    let myPrenom = document.getElementById("prenom");
    let myRegex = /^[a-zA-Z0-9_]+$/;

    if (myPrenom.value.trim() == "") {
        let myPrenomErr = document.getElementById("missPrenom");
        myPrenomErr.innerHTML = "le champ prenom est requis";
        myPrenomErr.style.color = "red";
        e.preventDefault();
    } else if (myRegex.test(myPrenom.value) == false) {
        let myPrenomErr = document.getElementById("missPrenom");
        myPrenomErr.innerHTML = "Prenom invalide";
        myPrenomErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de l'adress
    let myAdress = document.getElementById("adress");
    let adressRegex = /^[a-zA-Z0-9_]+$/;

    if (myAdress.value.trim() == "") {
        let myAdressErr = document.getElementById("missAdress");
        myAdressErr.innerHTML = "le champ adress est requis";
        myAdressErr.style.color = "red";
        e.preventDefault();
    } else if (myRegex.test(myAdress.value) == false) {
        let myAdressErr = document.getElementById("missAdress");
        myAdressErr.innerHTML = "Adresse invalide";
        myAdressErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de email
    let myEmail = document.getElementById("email");
    let emailRegex = /^.+@.+\.[a-zA-Z]{2,}$/;

    if (myEmail.value.trim() == "") {
        let myEmailErr = document.getElementById("missEmail");
        myEmailErr.innerHTML = "le champ Email est requis";
        myEmailErr.style.color = "red";
        e.preventDefault();
    } else if (emailRegex.test(myEmail.value) == false) {
        let myEmailErr = document.getElementById("missEmail");
        myEmailErr.innerHTML = "Email invalide";
        myEmailErr.style.color = "red";
        e.preventDefault();
    }

    // Controle du nom
    let myNom = document.getElementById("nom");
    let nomRegex = /^[a-zA-Z0-9_]+$/;

    if (myNom.value.trim() == "") {
        let myNomErr = document.getElementById("missNom");
        myNomErr.innerHTML = "le champ nom est requis";
        myNomErr.style.color = "red";
        e.preventDefault();
    } else if (nomRegex.test(myNom.value) == false) {
        let myNomErr = document.getElementById("missNom");
        myNomErr.innerHTML = "Nom invalide";
        myNomErr.style.color = "red";
        e.preventDefault();
    }

    // Controle du type client
    let myType = document.getElementById("typeClient");
    let typeRegex = /^[a-zA-Z-\s]+$/;

    if (myType.value.trim() == "") {
        let myTypeErr = document.getElementById("missTypeClient");
        myTypeErr.innerHTML = "le champ type client est requis";
        myTypeErr.style.color = "red";
        e.preventDefault();
    } else if (typeRegex.test(myType.value) == false) {
        let myTypeErr = document.getElementById("missTypeClient");
        myTypeErr.innerHTML = "Veuillez revoir le format";
        myTypeErr.style.color = "red";
        e.preventDefault();
    }

    // Controle du type telephone
    let myTelephone = document.getElementById("telephone");
    let telephoneRegex = /^(77|78|70|76)[0-9]{7}$/;

    if (myTelephone.value.trim() == "") {
        let myTelephoneErr = document.getElementById("missTelephone");
        myTelephoneErr.innerHTML = "le champ telephone est requis";
        myTelephoneErr.style.color = "red";
        e.preventDefault();
    } else if (telephoneRegex.test(myTelephone.value) == false) {
        let myTelephoneErr = document.getElementById("missTelephone");
        myTelephoneErr.innerHTML = "Telephone invalide";
        myTelephoneErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de prfession
    let myProfession = document.getElementById("profession");
    let professionRegex = /^[a-zA-Z0-9_]+$/;

    if (myProfession.value.trim() == "") {
        let myProfessionErr = document.getElementById("missProfession");
        myProfessionErr.innerHTML = "le champ profession est requis";
        myProfessionErr.style.color = "red";
        e.preventDefault();
    } else if (professionRegex.test(myProfession.value) == false) {
        let myProfessionErr = document.getElementById("missProfession");
        myProfessionErr.innerHTML = "Profession invalide";
        myProfessionErr.style.color = "red";
        e.preventDefault();
    }

    // Controle du cni
    let myCni = document.getElementById("cni");
    let cniRegex = /^[0-9]{13}$/;

    if (myCni.value.trim() == "") {
        let myCniErr = document.getElementById("missCni");
        myCniErr.innerHTML = "le champ cni est requis";
        myCniErr.style.color = "red";
        e.preventDefault();
    } else if (cniRegex.test(myCni.value) == false) {
        let myCniErr = document.getElementById("missCni");
        myCniErr.innerHTML = "CNI invalide";
        myCniErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de salaire
    let mySalaire = document.getElementById("salaire");

    if (mySalaire.value.trim() == "") {
        let mySalaireErr = document.getElementById("missSalaire");
        mySalaireErr.innerHTML = "le champ salaire est requis";
        mySalaireErr.style.color = "red";
        e.preventDefault();
    } else if ((mySalaire.value >= 25000 && mySalaire.value <= 2000000) == false) {
        let mySalaireErr = document.getElementById("missSalaire");
        mySalaireErr.innerHTML = "Salaire invalide";
        mySalaireErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de prenom employeur
    let myPrenomEmpl = document.getElementById("prenomEmpl");
    let employeRegex = /^[a-zA-Z0-9_]+$/;

    if (myPrenomEmpl.value.trim() == "") {
        let myPrenomEmplErr = document.getElementById("missPrenomEmpl");
        myPrenomEmplErr.innerHTML = "le champ prenom est requis";
        myPrenomEmplErr.style.color = "red";
        e.preventDefault();
    } else if (employeRegex.test(myPrenomEmpl.value) == false) {
        let myPrenomEmplErr = document.getElementById("missPrenomEmpl");
        myPrenomEmplErr.innerHTML = "Prenom invalide";
        myPrenomEmplErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de raison sociale
    let myRaisonS = document.getElementById("raisonS");
    let raisonRegex = /^[a-zA-Z0-9_]+$/;

    if (myRaisonS.value.trim() == "") {
        let myRaisonSErr = document.getElementById("missRaisonS");
        myRaisonSErr.innerHTML = "le champ raison est requis";
        myRaisonSErr.style.color = "red";
        e.preventDefault();
    } else if (raisonRegex.test(myRaisonS.value) == false) {
        let myRaisonSErr = document.getElementById("missRaisonS");
        myRaisonSErr.innerHTML = "Raison S invalide";
        myRaisonSErr.style.color = "red";
        e.preventDefault();
    }


    // Controle de adresse
    let myAdressEmpl = document.getElementById("adressEmpl");
    let adressEmRegex = /^[a-zA-Z0-9_]+$/;

    if (myAdressEmpl.value.trim() == "") {
        let myAdressEmplErr = document.getElementById("missAdressEmpl");
        myAdressEmplErr.innerHTML = "le champ adress est requis";
        myAdressEmplErr.style.color = "red";
        e.preventDefault();
    } else if (adressEmRegex.test(myAdressEmpl.value) == false) {
        let myAdressEmplErr = document.getElementById("missAdressEmpl");
        myAdressEmplErr.innerHTML = "Adresse invalide";
        myAdressEmplErr.style.color = "red";
        e.preventDefault();
    }

    // Controle de cni
    let myEmployeur = document.getElementById("cniEmployeur");
    let empRegex = /^[0-9]{13}$/;

    if (myEmployeur.value.trim() == "") {
        let myEmployeurErr = document.getElementById("missEmployeur");
        myEmployeurErr.innerHTML = "le champ CNI est requis";
        myEmployeurErr.style.color = "red";
        e.preventDefault();
    } else if (empRegex.test(myEmployeur.value) == false) {
        let myEmployeurErr = document.getElementById("missEmployeur");
        myEmployeurErr.innerHTML = "CNI invalide";
        myEmployeurErr.style.color = "red";
        e.preventDefault();
    }
});