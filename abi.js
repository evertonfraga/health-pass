var ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_controller",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_picture",
				"type": "string"
			},
			{
				"name": "_countryCode",
				"type": "string"
			},
			{
				"name": "_dateOfBirth",
				"type": "uint256"
			}
		],
		"name": "addCredential",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_controller",
				"type": "address"
			},
			{
				"name": "_eventName",
				"type": "string"
			},
			{
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"name": "_lat",
				"type": "int256"
			},
			{
				"name": "_lon",
				"type": "int256"
			}
		],
		"name": "newAttestation",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "testEvent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_controller",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_eventName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "lat",
				"type": "int256"
			},
			{
				"indexed": false,
				"name": "lon",
				"type": "int256"
			}
		],
		"name": "AttestationEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "Test",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "credentials",
		"outputs": [
			{
				"name": "controller",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "picture",
				"type": "string"
			},
			{
				"name": "countryCode",
				"type": "string"
			},
			{
				"name": "dateOfBirth",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_credentialAddress",
				"type": "address"
			}
		],
		"name": "getCountryCode",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_credentialAddress",
				"type": "address"
			}
		],
		"name": "getCredentialDateOfBirth",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_credentialAddress",
				"type": "address"
			}
		],
		"name": "getCredentialName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_credentialAddress",
				"type": "address"
			}
		],
		"name": "getCredentialPicture",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];





