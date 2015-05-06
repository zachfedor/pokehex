/**
 * THEME JAVASCRIPT
 */

function pokeText() {
    var ptInput = document.getElementById("pt_input").value;
    var ptOutput = " ";
    var errors = false;
    var chars = ptInput.split('');
    var pokeTextLookup = {
        "A": function() { return "80"; },
        "B": function() { return "81"; },
        "C": function() { return "82"; },
        "D": function() { return "83"; },
        "E": function() { return "84"; },
        "F": function() { return "85"; },
        "G": function() { return "86"; },
        "H": function() { return "87"; },
        "I": function() { return "88"; },
        "J": function() { return "89"; },
        "K": function() { return "8A"; },
        "L": function() { return "8B"; },
        "M": function() { return "8C"; },
        "N": function() { return "8D"; },
        "O": function() { return "8E"; },
        "P": function() { return "8F"; },
        "Q": function() { return "90"; },
        "R": function() { return "91"; },
        "S": function() { return "92"; },
        "T": function() { return "93"; },
        "U": function() { return "94"; },
        "V": function() { return "95"; },
        "W": function() { return "96"; },
        "X": function() { return "97"; },
        "Y": function() { return "98"; },
        "Z": function() { return "99"; },
        "(": function() { return "9A"; },
        ")": function() { return "9B"; },
        ":": function() { return "9C"; },
        ";": function() { return "9D"; },
        "[": function() { return "9E"; },
        "]": function() { return "9F"; },
        "a": function() { return "A0"; },
        "b": function() { return "A1"; },
        "c": function() { return "A2"; },
        "d": function() { return "A3"; },
        "e": function() { return "A4"; },
        "f": function() { return "A5"; },
        "g": function() { return "A6"; },
        "h": function() { return "A7"; },
        "i": function() { return "A8"; },
        "j": function() { return "A9"; },
        "k": function() { return "AA"; },
        "l": function() { return "AB"; },
        "m": function() { return "AC"; },
        "n": function() { return "AD"; },
        "o": function() { return "AE"; },
        "p": function() { return "AF"; },
        "q": function() { return "B0"; },
        "r": function() { return "B1"; },
        "s": function() { return "B2"; },
        "t": function() { return "B3"; },
        "u": function() { return "B4"; },
        "v": function() { return "B5"; },
        "w": function() { return "B6"; },
        "x": function() { return "B7"; },
        "y": function() { return "B8"; },
        "z": function() { return "B9"; },
        "-": function() { return "E3"; },
        "?": function() { return "E6"; },
        "!": function() { return "E7"; },
        ".": function() { return "E8"; },
        "*": function() { return "F1"; },
        "/": function() { return "F3"; },
        ",": function() { return "F4"; },
        "0": function() { return "F6"; },
        "1": function() { return "F7"; },
        "2": function() { return "F8"; },
        "3": function() { return "F9"; },
        "4": function() { return "FA"; },
        "5": function() { return "FB"; },
        "6": function() { return "FC"; },
        "7": function() { return "FD"; },
        "8": function() { return "FE"; },
        "9": function() { return "FF"; },
        " ": function() { return "7F"; }
    };

    for( var i = 0; i < chars.length; ++i ) {
        if( /[A-Z():;\[\]a-z-?!.*/,0-9 ]/.test( chars[i] ) ) {
        ptOutput += '<span>' + pokeTextLookup[ chars[i] ]() + '</span>';
        } else {
            ptOutput += '<span class="error">' + chars[i] + '</span>';
            errors = true;
        }
    }

    document.getElementById("pt_output").innerHTML = ptOutput;
}

function hexToDec() {
    var hex = document.getElementById("hd_hex").value;
    var dec = parseInt(hex, 16);
    document.getElementById("hd_dec").value = dec;
}

function decToHex() {
    var dec = document.getElementById("hd_dec").value;
    var hex = parseInt( dec ).toString(16).toUpperCase();
    document.getElementById("hd_hex").value = hex;
}

function partyHex() {
    var ph_moveNum;
    var phOutput = '<span>' + document.getElementById("ph_species").value + '</span>';
    phOutput += '<span>' + document.getElementById("ph_item").value + '</span>';

    for( var i = 1; i < 5; ++i) {
        ph_moveNum = document.getElementById( "ph_move" + i.toString() ).value;

        if( ph_moveNum ) {
            phOutput = parseInt( ph_moveNum ).toString(16).toUpperCase();
        } else {
            phOutput = "00";
        }

        phOutput += '<span>' + phOutput + '</span>';
    }

    document.getElementById("ph_output").innerHTML = phOutput;
}

var test = "";
