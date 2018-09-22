"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auditee = (function () {
    function Auditee(id, firstname, lastname, fullName, mobile, email, locationId) {
        this.Id = id;
        this.Firstname = firstname;
        this.FullName = fullName;
        this.Lastname = lastname;
        this.Mobile = mobile;
        this.Email = email;
        this.LocationId = locationId;
    }
    return Auditee;
}());
exports.Auditee = Auditee;
