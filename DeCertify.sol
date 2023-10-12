//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract DeCertify{
    // string instituteName;
    // address instituteWallet;
    // string instituteCourse;
    // string issuerName;
    // string issuerId
    

    struct institute{
        string instituteName;
        address instituteWallet;
        string instituteCourse;
    }

    institute[] public listOfInstitutes; 

    struct issuer{
        string issuerId;
        string issuerName;
    }

    issuer[] public listOfIssuers;

    mapping(string => string) public idToIssuerName;

    function addInstitute(string memory _instituteName, address _instituteWallet, string memory _instituteCourse) public{
        listOfInstitutes.push( institute(_instituteName,_instituteWallet,_instituteCourse));
    }

    function addIssuer(string memory _issuerId, string memory _issuerName) public{
        listOfIssuers.push( issuer(_issuerId,_issuerName));
        idToIssuerName[_issuerId] = _issuerName;
    }
}