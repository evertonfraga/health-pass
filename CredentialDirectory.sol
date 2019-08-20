pragma solidity ^0.5.0;


contract CredentialDirectory {

  struct CredentialStruct {
    address controller;
    string name;
    string picture;
    string countryCode;
    uint256 dateOfBirth;
  }

  mapping (address => CredentialStruct) public credentials;

  event AttestationEvent(address _controller, string _eventName, uint256 _timestamp, int lat, int lon);
  event Test(uint a);

  function addCredential(
    address _controller,
    string memory _name,
    string memory _picture,
    string memory _countryCode,
    uint256 _dateOfBirth
  ) public returns (bool) {
    credentials[_controller].controller = _controller;
    credentials[_controller].name = _name;
    credentials[_controller].picture = _picture;
    credentials[_controller].countryCode = _countryCode;
    credentials[_controller].dateOfBirth = _dateOfBirth;

    return true;
  }

  function getCredentialName(address _credentialAddress) public view returns (string memory) {
    return credentials[_credentialAddress].name;
  }

  function getCredentialPicture(address _credentialAddress) public view returns (string memory) {
    return credentials[_credentialAddress].picture;
  }

  function getCredentialDateOfBirth(address _credentialAddress) public view returns (uint256) {
    return credentials[_credentialAddress].dateOfBirth;
  }

  // We use the two char country codes
  // https://www.countryflags.io
  // https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
  function getCountryCode(address _credentialAddress) public view returns (string memory) {
    return credentials[_credentialAddress].countryCode;
  }

  function newAttestation(address _controller, string memory _eventName, uint256 _timestamp, int _lat, int _lon) public returns (bool) {
    emit AttestationEvent(_controller, _eventName, _timestamp, _lat, _lon);
    return true;
  }

  function testEvent() public{
      emit Test(1);
  }
}
