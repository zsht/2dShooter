var start =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);

var Binary = {};

/* unsigned! 0 to n */
// 0 to 1, false or true
Binary[BinaryType.Boolean] = __webpack_require__(29);
// 0 to 3
Binary[BinaryType.UInt2] = __webpack_require__(30);
// 0 to 7
Binary[BinaryType.UInt3] = __webpack_require__(31);
// 0 to 15
Binary[BinaryType.UInt4] = __webpack_require__(32);
// 0 to 31
Binary[BinaryType.UInt5] = __webpack_require__(33);
// 0 to 63
Binary[BinaryType.UInt6] = __webpack_require__(34);
// 0 to 127
Binary[BinaryType.UInt7] = __webpack_require__(35);
// 0 to 255
Binary[BinaryType.UInt8] = __webpack_require__(12);
// 0 to 511
Binary[BinaryType.UInt9] = __webpack_require__(36);
// 0 to 1023
Binary[BinaryType.UInt10] = __webpack_require__(37);
// 0 to 2047
Binary[BinaryType.UInt11] = __webpack_require__(38);
// 0 to 4095
Binary[BinaryType.UInt12] = __webpack_require__(39);
// 0 to 65535
Binary[BinaryType.UInt16] = __webpack_require__(40);
// 0 to 4294967295
Binary[BinaryType.UInt32] = __webpack_require__(41);

/* signed! includes negative numbers */
// -8 to 7
Binary[BinaryType.Int4] = __webpack_require__(42);
// -32 to 31
Binary[BinaryType.Int6] = __webpack_require__(43);
// -128 to 127
Binary[BinaryType.Int8] = __webpack_require__(44);
// -512 to 511
Binary[BinaryType.Int10] = __webpack_require__(45);
// -32768 to 32767
Binary[BinaryType.Int16] = __webpack_require__(46);
// -2147483648 to 2147483647
Binary[BinaryType.Int32] = __webpack_require__(47);

Binary[BinaryType.Float32] = __webpack_require__(48);

Binary[BinaryType.Float64] = __webpack_require__(49);

/* special fancy types! */
Binary[BinaryType.EntityId] = __webpack_require__(50);
// rotation in radians networked in one byte
Binary[BinaryType.Rotation8] = __webpack_require__(51);
Binary[BinaryType.RotationFloat32] = __webpack_require__(52);
// an RGB color, with one byte for each component
Binary[BinaryType.RGB888] = __webpack_require__(53);
// String support, ASCIIStrings up to 255 characters
Binary[BinaryType.ASCIIString] = __webpack_require__(54);
// utf8 strings, potentially huge
Binary[BinaryType.UTF8String] = __webpack_require__(55);

Binary.countBits = function (propConfig, value) {
    var binaryMeta = Binary[propConfig.type];
    if (propConfig.isArray) {
        var totalBits = 0;
        var arrayIndexBinaryMeta = Binary[propConfig.arrayIndexBinaryType];
        totalBits += arrayIndexBinaryMeta.bits;
        if (binaryMeta.customBits) {
            totalBits += binaryMeta.countBits(value) * value.length;
        } else {
            totalBits += binaryMeta.bits * value.length;
        }
        return totalBits;
    } else {
        if (binaryMeta.customBits) {
            return binaryMeta.countBits(value);
        } else {
            return binaryMeta.bits;
        }
    }
};

module.exports = Binary;

/***/ }),
/* 1 */
/***/ (function(module, exports) {


function createEnum(values) {
    var enumm = {};
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        enumm[value] = i;
    }
    return enumm;
}

var BinaryType = createEnum(['Null', 'Boolean', 'UInt2', 'UInt3', 'UInt4', 'UInt5', 'UInt6', 'UInt7', 'UInt8', 'UInt9', 'UInt10', 'UInt11', 'UInt12', 'UInt16', 'UInt32', 'Int4', 'Int6', 'Int8', 'Int10', 'Int16', 'Int32', 'Float32', 'Float64', 'EntityId', 'Rotation8', 'ASCIIString', 'UTF8String', 'RGB888']);

module.exports = BinaryType;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function compareIntegers(a, b) {
    var intA = Math.floor(a);
    var intB = Math.floor(b);
    return {
        a: intA,
        b: intB,
        isChanged: intA !== intB
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Please see the NENGI END USER LICENSE available in the LICENSE.txt file
* By downloading or using this software or related content you are agreeing to 
* be bounds by the terms of the NENGI END USER LICENSE Agreement. If you do not 
* or cannot agree to the terms of the Agreement please do not download or use 
* this software.
*/
var nengi = {};
//nengi.config = require('./config')

var BinaryType = __webpack_require__(1);
// shortcuts for less typing
nengi.Boolean = BinaryType.Boolean;
nengi.Int2 = BinaryType.Int2;
nengi.UInt2 = BinaryType.UInt2;
nengi.Int3 = BinaryType.Int3;
nengi.UInt3 = BinaryType.UInt3;
nengi.Int4 = BinaryType.Int4;
nengi.UInt4 = BinaryType.UInt4;
nengi.Int6 = BinaryType.Int6;
nengi.UInt6 = BinaryType.UInt6;
nengi.Int8 = BinaryType.Int8;
nengi.UInt8 = BinaryType.UInt8;
nengi.Int10 = BinaryType.Int10;
nengi.UInt10 = BinaryType.UInt10;
nengi.Int12 = BinaryType.Int12;
nengi.UInt12 = BinaryType.UInt12;
nengi.Int16 = BinaryType.Int16;
nengi.UInt16 = BinaryType.UInt16;
nengi.Int32 = BinaryType.Int32;
nengi.UInt32 = BinaryType.UInt32;
nengi.Float32 = BinaryType.Float32;
nengi.Number = nengi.Float64 = BinaryType.Float64;
nengi.EntityId = BinaryType.EntityId;
nengi.RGB888 = BinaryType.RGB888;
//nengi.Rotation8 = BinaryType.Rotation8
nengi.ASCIIString = BinaryType.ASCIIString;
nengi.String = nengi.UTF8String = BinaryType.UTF8String;

nengi.Basic = nengi.Protocol = __webpack_require__(5);

nengi.Entity = nengi.EntityProtocol = __webpack_require__(14);

nengi.LEvent = nengi.LocalEventProtocol = __webpack_require__(15);

nengi.Msg = nengi.Message = nengi.MessageProtocol = __webpack_require__(16);

nengi.Command = nengi.CommandProtocol = __webpack_require__(17);

// NODE-only
//nengi.Instance = require('./core/instance/Instance')

// browser
nengi.Client = __webpack_require__(56);
nengi.Interpolator = __webpack_require__(96);

// NODE-only
//engi.Bot = require('./core/bot/Bot')

module.exports = nengi;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

//var selectUIntType = require('../schema/selectUIntType')
var BinaryType = __webpack_require__(1);

var reverse = {};
function createEnum(values) {
    var enumm = {};
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        enumm[value] = i;
        reverse[i] = value;
    }
    return enumm;
}

var snapshotCategories = ['ClientTick', 'Ping', 'Pong', 'Timesync', 'CreateEntities', 'UpdateEntitiesPartial', 'UpdateEntitiesOptimized', 'DeleteEntities', 'CreateComponents', 'UpdateComponentsPartial', 'UpdateComponentsOptimized', 'DeleteComponents', 'Messages', 'LocalEvents', 'Commands', 'JSONs', 'TransferClient', 'TransferRequest', 'TransferResponse', 'Handshake', 'ConnectionResponse', 'Engine'];

// must be at least one byte to avoid cornercase buffer reading bugs
var chunkType = BinaryType.UInt8; //selectUIntType(snapshotCategories.length)

var Chunk = createEnum(snapshotCategories);

module.exports.ChunkReverse = reverse;
module.exports.Chunk = Chunk;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var createPropSchema = __webpack_require__(26);
var createOptSchema = __webpack_require__(27);
var selectUIntType = __webpack_require__(28);

function Protocol(schemaConfig, config, optSchemaConfig, components, throwOnAdvancedTypes) {
	//console.log('creating protocol from', schemaConfig, throwOnAdvancedTypes)
	this.metaType = 'protocol';
	this.type = 'basic';
	this.properties = {};
	this.keys = [];

	this.hasOptimizations = false;

	var arr = [];
	if (schemaConfig[config.TYPE_PROPERTY_NAME]) {
		arr.push(config.TYPE_PROPERTY_NAME);
	}
	if (schemaConfig[config.ID_PROPERTY_NAME]) {
		arr.push(config.ID_PROPERTY_NAME);
	}

	for (var prop in schemaConfig) {
		if (prop !== config.TYPE_PROPERTY_NAME && prop !== config.ID_PROPERTY_NAME) {
			arr.push(prop);
		}
	}
	//arr.sort(propSort)

	this.keyType = selectUIntType(arr.length);

	for (var i = 0; i < arr.length; i++) {
		var prop = arr[i];

		var propConfig = schemaConfig[prop];

		this.properties[prop] = createPropSchema(i, propConfig, throwOnAdvancedTypes);
		this.keys.push(prop);

		if (prop.indexOf('.') !== -1) {
			this.properties[prop].path = prop.split('.');
			if (this.properties[prop].path.length > 3) {
				throw new Error('Protocol nested property limit (3 maximum) exceeded by path ' + schemaConfig + ' ' + optSchemaConfig);
			}
		} else {
			this.properties[prop].path = [prop];
		}
	}

	if (typeof optSchemaConfig !== 'undefined') {
		var batch = {};
		batch.properties = {};
		batch.keys = [];

		var arr2 = [];
		for (var prop in optSchemaConfig) {
			arr2.push(prop);
		}

		for (var i = 0; i < arr2.length; i++) {
			var prop = arr2[i];

			var optConfig = optSchemaConfig[prop];

			batch.properties[prop] = createOptSchema(i, optConfig);
			batch.keys.push(prop);

			if (prop.indexOf('.') !== -1) {
				batch.properties[prop].path = prop.split('.');
				if (batch.properties[prop].path.length > 3) {
					throw new Error('Protocol nested property limit (3 maximum) exceeded by path ' + schemaConfig + ' ' + optSchemaConfig);
				}
			} else {
				batch.properties[prop].path = [prop];
			}
		}
		this.hasOptimizations = true;
		this.batch = batch;
	}

	if (components) {
		this.components = {
			mode: components.mode
		};
	} else {
		this.components = false;
	}

	//console.log(this)
}

module.exports = Protocol;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function getValue(obj, path) {
    //console.log('getValue', obj, path)
    if (path) {
        if (path.length === 1) {
            return obj[path[0]];
        } else if (path.length === 2) {
            return obj[path[0]][path[1]];
        } else if (path.length === 3) {
            return obj[path[0]][path[1]][path[2]];
        } else {
            throw new Error('proxify property path is too deep, 3 layer nest limit: obj.a.b.c; obj: ' + obj + ' path: ' + path);
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
var BitBuffer = function (sourceOrLength) {
	this.bitLength = null; // length in bits (can be less than the bytes/8)
	this.byteLength = null; // length in bytes (atleast enough to hold the bits)
	this.byteArray = null; // Uint8Array holding the underlying bytes

	if (typeof sourceOrLength === 'number') {
		// create a bitBuffer with *length* bits
		this.bitLength = sourceOrLength;
		this.byteLength = Math.ceil(sourceOrLength / 8);
		if (typeof Buffer !== 'undefined') {
			this.byteArray = new Buffer(this.byteLength);
		} else {
			this.byteArray = new Uint8Array(this.byteLength);
		}
	} else if (sourceOrLength instanceof ArrayBuffer) {
		// create a bitBuffer from an ArrayBuffer (Uint8Array, etc)
		this.bitLength = sourceOrLength.byteLength * 8;
		this.byteLength = sourceOrLength.byteLength;
		this.byteArray = new Uint8Array(sourceOrLength);
	} else if (typeof Buffer !== 'undefined' && sourceOrLength instanceof Buffer) {
		// create a bitBuffer from a node Buffer
		this.bitLength = sourceOrLength.length * 8;
		this.byteLength = sourceOrLength.length;
		this.byteArray = new Uint8Array(sourceOrLength);
	} else {
		throw new Error('Unable to create BitBuffer, expected length (in bits), ArrayBuffer, or Buffer');
	}
};

// Used to massage fp values so we can operate on them
// at the bit level.
BitBuffer._scratch = new DataView(new ArrayBuffer(8));

BitBuffer.concat = function (bitViews) {
	var bitLength = 0;
	for (var i = 0; i < bitViews.length; i++) {
		bitLength += bitViews[i].bitLength;
	}
	var bitView = new BitBuffer(new Buffer(Math.ceil(bitLength / 8)));
	var offset = 0;
	for (var i = 0; i < bitViews.length; i++) {
		for (var j = 0; j < bitViews[i].bitLength; j++) {
			bitView._setBit(bitViews[i]._getBit(j), offset);
			offset++;
		}
	}
	return bitView;
};

BitBuffer.prototype.toBuffer = function () {
	return this.byteArray; //new Buffer(this.byteArray, this.byteLength)
};

BitBuffer.prototype._getBit = function (offset) {
	return this.byteArray[offset >> 3] >> (offset & 7) & 0x1;
};

BitBuffer.prototype._setBit = function (on, offset) {
	if (on) {
		this.byteArray[offset >> 3] |= 1 << (offset & 7);
	} else {
		this.byteArray[offset >> 3] &= ~(1 << (offset & 7));
	}
};

BitBuffer.prototype.getBits = function (offset, bits, signed) {
	var available = this.byteArray.length * 8 - offset;

	if (bits > available) {
		throw new Error('Cannot get ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
	}

	var value = 0;
	for (var i = 0; i < bits;) {

		/*
  var read
  		// Read an entire byte if we can.
  if ((bits - i) >= 8 && ((offset & 7) === 0)) {
  	value |= (this.byteArray[offset >> 3] << i)
  	read = 8
  } else {
  	value |= (this._getBit(offset) << i)
  	read = 1
  }
  */

		var remaining = bits - i;
		var bitOffset = offset & 7;
		var currentByte = this.byteArray[offset >> 3];
		var read = Math.min(remaining, 8 - bitOffset);
		var mask = (1 << read) - 1;
		var readBits = currentByte >> bitOffset & mask;
		value |= readBits << i;

		offset += read;
		i += read;
	}

	if (signed) {
		// If we're not working with a full 32 bits, check the
		// imaginary MSB for this bit count and convert to a
		// valid 32-bit signed value if set.
		if (bits !== 32 && value & 1 << bits - 1) {
			value |= -1 ^ (1 << bits) - 1;
		}

		return value;
	}

	return value >>> 0;
};

BitBuffer.prototype.setBits = function (value, offset, bits) {
	var available = this.byteArray.length * 8 - offset;

	if (bits > available) {
		throw new Error('Cannot set ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
	}

	for (var i = 0; i < bits;) {
		var wrote;

		// Write an entire byte if we can.
		if (bits - i >= 8 && (offset & 7) === 0) {
			this.byteArray[offset >> 3] = value & 0xFF;
			wrote = 8;
		} else {
			this._setBit(value & 0x1, offset);
			wrote = 1;
		}

		value = value >> wrote;

		offset += wrote;
		i += wrote;
	}
};

// true, false
BitBuffer.prototype.readBoolean = function (offset) {
	return this.getBits(offset, 1, false) !== 0;
};

// -2 to 1
BitBuffer.prototype.readInt2 = function (offset) {
	return this.getBits(offset, 2, true);
};
// 0 to 3
BitBuffer.prototype.readUInt2 = function (offset) {
	return this.getBits(offset, 2, false);
};
// -4 to 3
BitBuffer.prototype.readInt3 = function (offset) {
	return this.getBits(offset, 3, true);
};
// 0 to 7
BitBuffer.prototype.readUInt3 = function (offset) {
	return this.getBits(offset, 3, false);
};
// -8 to 7
BitBuffer.prototype.readInt4 = function (offset) {
	return this.getBits(offset, 4, true);
};
// 0 to 15
BitBuffer.prototype.readUInt4 = function (offset) {
	return this.getBits(offset, 4, false);
};
// -16 to 15
BitBuffer.prototype.readInt5 = function (offset) {
	return this.getBits(offset, 5, true);
};
// 0 to 31
BitBuffer.prototype.readUInt5 = function (offset) {
	return this.getBits(offset, 5, false);
};
// -32 to 31
BitBuffer.prototype.readInt6 = function (offset) {
	return this.getBits(offset, 6, true);
};
// 0 to 63
BitBuffer.prototype.readUInt6 = function (offset) {
	return this.getBits(offset, 6, false);
};
// -64 to 63
BitBuffer.prototype.readInt7 = function (offset) {
	return this.getBits(offset, 7, true);
};
// 0 to 127
BitBuffer.prototype.readUInt7 = function (offset) {
	return this.getBits(offset, 7, false);
};
// -128 to 127
BitBuffer.prototype.readInt8 = function (offset) {
	return this.getBits(offset, 8, true);
};
// 0 to 255
BitBuffer.prototype.readUInt8 = function (offset) {
	return this.getBits(offset, 8, false);
};
// -256 to 255
BitBuffer.prototype.readInt9 = function (offset) {
	return this.getBits(offset, 9, true);
};
// 0 to 511
BitBuffer.prototype.readUInt9 = function (offset) {
	return this.getBits(offset, 9, false);
};
// -512 to 511
BitBuffer.prototype.readInt10 = function (offset) {
	return this.getBits(offset, 10, true);
};
// 0 to 1023
BitBuffer.prototype.readUInt10 = function (offset) {
	return this.getBits(offset, 10, false);
};
// -1024 to 1023
BitBuffer.prototype.readInt11 = function (offset) {
	return this.getBits(offset, 11, true);
};
// 0 to 2047
BitBuffer.prototype.readUInt11 = function (offset) {
	return this.getBits(offset, 11, false);
};
// -2048 to 2047
BitBuffer.prototype.readInt12 = function (offset) {
	return this.getBits(offset, 12, true);
};
// 0 to 4095
BitBuffer.prototype.readUInt12 = function (offset) {
	return this.getBits(offset, 12, false);
};
// -32768 to 32767
BitBuffer.prototype.readInt16 = function (offset) {
	return this.getBits(offset, 16, true);
};
// 0 to 65535
BitBuffer.prototype.readUInt16 = function (offset) {
	return this.getBits(offset, 16, false);
};
// -2147483648 to 2147483647
BitBuffer.prototype.readInt32 = function (offset) {
	return this.getBits(offset, 32, true);
};
// 0 to 4294967295
BitBuffer.prototype.readUInt32 = function (offset) {
	return this.getBits(offset, 32, false);
};
BitBuffer.prototype.readFloat32 = function (offset) {
	BitBuffer._scratch.setUint32(0, this.readUInt32(offset));
	return BitBuffer._scratch.getFloat32(0);
};
BitBuffer.prototype.readFloat64 = function (offset) {
	BitBuffer._scratch.setUint32(0, this.readUInt32(offset));
	// DataView offset is in bytes.
	BitBuffer._scratch.setUint32(4, this.readUInt32(offset + 32));
	return BitBuffer._scratch.getFloat64(0);
};

BitBuffer.prototype.writeBoolean = function (value, offset) {
	this.setBits(value ? 1 : 0, offset, 1);
};
BitBuffer.prototype.writeInt2 = BitBuffer.prototype.writeUInt2 = function (value, offset) {
	this.setBits(value, offset, 2);
};
BitBuffer.prototype.writeInt3 = BitBuffer.prototype.writeUInt3 = function (value, offset) {
	this.setBits(value, offset, 3);
};
BitBuffer.prototype.writeInt4 = BitBuffer.prototype.writeUInt4 = function (value, offset) {
	this.setBits(value, offset, 4);
};
BitBuffer.prototype.writeInt5 = BitBuffer.prototype.writeUInt5 = function (value, offset) {
	this.setBits(value, offset, 5);
};
BitBuffer.prototype.writeInt6 = BitBuffer.prototype.writeUInt6 = function (value, offset) {
	this.setBits(value, offset, 6);
};
BitBuffer.prototype.writeInt7 = BitBuffer.prototype.writeUInt7 = function (value, offset) {
	this.setBits(value, offset, 7);
};
BitBuffer.prototype.writeInt8 = BitBuffer.prototype.writeUInt8 = function (value, offset) {
	this.setBits(value, offset, 8);
};
BitBuffer.prototype.writeInt9 = BitBuffer.prototype.writeUInt9 = function (value, offset) {
	this.setBits(value, offset, 9);
};
BitBuffer.prototype.writeInt10 = BitBuffer.prototype.writeUInt10 = function (value, offset) {
	this.setBits(value, offset, 10);
};
BitBuffer.prototype.writeInt11 = BitBuffer.prototype.writeUInt11 = function (value, offset) {
	this.setBits(value, offset, 11);
};
BitBuffer.prototype.writeInt12 = BitBuffer.prototype.writeUInt12 = function (value, offset) {
	this.setBits(value, offset, 12);
};
BitBuffer.prototype.writeInt16 = BitBuffer.prototype.writeUInt16 = function (value, offset) {
	this.setBits(value, offset, 16);
};
BitBuffer.prototype.writeInt32 = BitBuffer.prototype.writeUInt32 = function (value, offset) {
	this.setBits(value, offset, 32);
};
BitBuffer.prototype.writeFloat32 = function (value, offset) {
	BitBuffer._scratch.setFloat32(0, value);
	this.setBits(BitBuffer._scratch.getUint32(0), offset, 32);
};
BitBuffer.prototype.writeFloat64 = function (value, offset) {
	BitBuffer._scratch.setFloat64(0, value);
	this.setBits(BitBuffer._scratch.getUint32(0), offset, 32);
	this.setBits(BitBuffer._scratch.getUint32(4), offset + 32, 32);
};

module.exports = BitBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports) {


/*
* Offers a stream for writing to a BitBuffer that increments its own offset.
* Supplying an offset [optional] will start the stream at the specified position.
*/
function BitStream(bitBuffer, offset) {
	this.bitBuffer = bitBuffer;
	this.offset = typeof offset === 'undefined' ? 0 : offset;
}

// map functions from BitStream to BitBuffer
var _factoryRead = function (readFn, bits) {
	return function bitStreamFactoryRead() {
		var value = this.bitBuffer[readFn](this.offset);
		this.offset += bits;
		return value;
	};
};

// map functions from BitStream to BitBuffer
var _factoryWrite = function (writeFn, bits) {
	return function bitStreamFactoryWrite(value) {
		this.bitBuffer[writeFn](value, this.offset);
		this.offset += bits;
	};
};

BitStream.prototype.writeBoolean = _factoryWrite('writeBoolean', 1);

BitStream.prototype.writeInt2 = _factoryWrite('writeInt2', 2);
BitStream.prototype.writeUInt2 = _factoryWrite('writeUInt2', 2);

BitStream.prototype.writeInt3 = _factoryWrite('writeInt3', 3);
BitStream.prototype.writeUInt3 = _factoryWrite('writeUInt3', 3);

BitStream.prototype.writeInt4 = _factoryWrite('writeInt4', 4);
BitStream.prototype.writeUInt4 = _factoryWrite('writeUInt4', 4);

BitStream.prototype.writeInt5 = _factoryWrite('writeInt5', 5);
BitStream.prototype.writeUInt5 = _factoryWrite('writeUInt5', 5);

BitStream.prototype.writeInt6 = _factoryWrite('writeInt6', 6);
BitStream.prototype.writeUInt6 = _factoryWrite('writeUInt6', 6);

BitStream.prototype.writeInt7 = _factoryWrite('writeInt7', 7);
BitStream.prototype.writeUInt7 = _factoryWrite('writeUInt7', 7);

BitStream.prototype.writeInt8 = _factoryWrite('writeInt8', 8);
BitStream.prototype.writeUInt8 = _factoryWrite('writeUInt8', 8);

BitStream.prototype.writeInt9 = _factoryWrite('writeInt9', 9);
BitStream.prototype.writeUInt9 = _factoryWrite('writeUInt9', 9);

BitStream.prototype.writeInt10 = _factoryWrite('writeInt10', 10);
BitStream.prototype.writeUInt10 = _factoryWrite('writeUInt10', 10);

BitStream.prototype.writeInt11 = _factoryWrite('writeInt11', 11);
BitStream.prototype.writeUInt11 = _factoryWrite('writeUInt11', 11);

BitStream.prototype.writeInt12 = _factoryWrite('writeInt12', 12);
BitStream.prototype.writeUInt12 = _factoryWrite('writeUInt12', 12);

BitStream.prototype.writeInt16 = _factoryWrite('writeInt16', 16);
BitStream.prototype.writeUInt16 = _factoryWrite('writeUInt16', 16);

BitStream.prototype.writeInt32 = _factoryWrite('writeInt32', 32);
BitStream.prototype.writeUInt32 = _factoryWrite('writeUInt32', 32);

BitStream.prototype.writeFloat32 = _factoryWrite('writeFloat32', 32);

BitStream.prototype.writeFloat64 = _factoryWrite('writeFloat64', 64);

BitStream.prototype.readBoolean = _factoryRead('readBoolean', 1);

BitStream.prototype.readInt2 = _factoryRead('readInt2', 2);
BitStream.prototype.readUInt2 = _factoryRead('readUInt2', 2);

BitStream.prototype.readInt3 = _factoryRead('readInt3', 3);
BitStream.prototype.readUInt3 = _factoryRead('readUInt3', 3);

BitStream.prototype.readInt4 = _factoryRead('readInt4', 4);
BitStream.prototype.readUInt4 = _factoryRead('readUInt4', 4);

BitStream.prototype.readInt5 = _factoryRead('readInt5', 5);
BitStream.prototype.readUInt5 = _factoryRead('readUInt5', 5);

BitStream.prototype.readInt6 = _factoryRead('readInt6', 6);
BitStream.prototype.readUInt6 = _factoryRead('readUInt6', 6);

BitStream.prototype.readInt7 = _factoryRead('readInt7', 7);
BitStream.prototype.readUInt7 = _factoryRead('readUInt7', 7);

BitStream.prototype.readInt8 = _factoryRead('readInt8', 8);
BitStream.prototype.readUInt8 = _factoryRead('readUInt8', 8);

BitStream.prototype.readInt9 = _factoryRead('readInt9', 9);
BitStream.prototype.readUInt9 = _factoryRead('readUInt9', 9);

BitStream.prototype.readInt10 = _factoryRead('readInt10', 10);
BitStream.prototype.readUInt10 = _factoryRead('readUInt10', 10);

BitStream.prototype.readInt11 = _factoryRead('readInt11', 11);
BitStream.prototype.readUInt11 = _factoryRead('readUInt11', 11);

BitStream.prototype.readInt12 = _factoryRead('readInt12', 12);
BitStream.prototype.readUInt12 = _factoryRead('readUInt12', 12);

BitStream.prototype.readInt16 = _factoryRead('readInt16', 16);
BitStream.prototype.readUInt16 = _factoryRead('readUInt16', 16);

BitStream.prototype.readInt32 = _factoryRead('readInt32', 32);
BitStream.prototype.readUInt32 = _factoryRead('readUInt32', 32);

BitStream.prototype.readFloat32 = _factoryRead('readFloat32', 32);

BitStream.prototype.readFloat64 = _factoryRead('readFloat64', 64);

module.exports = BitStream;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var readProp = __webpack_require__(18);
var setValue = __webpack_require__(10);

var readMessage = function (bitStream, protocol, initialPosition, type, typePropertyName) {
    var start = 0;

    var proxy = {};
    if (initialPosition) {

        start = initialPosition;
        //proxy.push(type)
        proxy[typePropertyName] = type;
    }

    for (var i = start; i < protocol.keys.length; i++) {
        var propName = protocol.keys[i];
        var propData = protocol.properties[propName];

        if (propData.protocol && propData.isArray) {
            var arrayIndexBinaryMeta = Binary[propData.arrayIndexType];
            var length = bitStream[arrayIndexBinaryMeta.read]();
            var temp = [];
            for (var j = 0; j < length; j++) {
                temp.push(readMessage(bitStream, propData.protocol));
            }
            value = temp;
        } else if (propData.protocol) {
            var value = readMessage(bitStream, propData.protocol); //, propData.protocol)
        } else {
            var value = readProp(bitStream, propData.type, propData.arrayIndexType);
        }
        setValue(proxy, propData.path, value);
        //proxy[propName] = value
    }
    return proxy;
};

module.exports = readMessage;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function setValue(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = value;
    } else if (path.length === 2) {
        if (typeof obj[path[0]] === 'undefined') {
            obj[path[0]] = {};
        }
        obj[path[0]][path[1]] = value;
    } else if (path.length === 3) {
        if (typeof obj[path[0]] === 'undefined') {
            obj[path[0]] = {};
        }
        if (typeof obj[path[0]][path[1]] === 'undefined') {
            obj[path[0]][path[1]] = {};
        }
        obj[path[0]][path[1]][path[2]] = value;
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function compareFloats(a, b) {
    return {
        a: a,
        b: b,
        isChanged: a !== b
    };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt8, an usigned 8 bit integer
* range: 0 to 255
* uses BitBuffer functions for write/read
*/
var UInt8 = {
    'min': 0,
    'max': 255,
    'bits': 8,
    'compare': __webpack_require__(2),
    'write': 'writeUInt8',
    'read': 'readUInt8'
};

UInt8.boundsCheck = function (value) {
    return value >= UInt8.min && value <= UInt8.max;
};

module.exports = UInt8;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*! https://mths.be/utf8js v3.0.0 by @mathias */
;(function(root) {

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	root.version = '3.0.0';
	root.encode = utf8encode;
	root.decode = utf8decode;

}( false ? this.utf8 = {} : exports));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
//var config = require('../../config')


function EntityProtocol(schemaConfig, config, components) {
    schemaConfig[config.TYPE_PROPERTY_NAME] = {
        type: config.TYPE_BINARY_TYPE,
        interp: false,
        isArray: false
    };

    schemaConfig[config.ID_PROPERTY_NAME] = {
        type: config.ID_BINARY_TYPE,
        interp: false,
        isArray: false

        /*
        if (typeof schemaConfig.x === 'undefined') {
            throw new Error('EntitySchema must define x.')
        }
          if (typeof schemaConfig.y === 'undefined') {
            throw new Error('EntitySchema must define y.')
        }
        */

    };var protocol = new Protocol(schemaConfig, config, null, components, true);
    protocol.type = 'Entity';

    return protocol;
}

module.exports = EntityProtocol;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
//var config = require('../../config')


function LocalEventProtocol(schemaConfig, config) {
	//console.log(schemaConfig)
	schemaConfig[config.TYPE_PROPERTY_NAME] = {
		type: config.TYPE_BINARY_TYPE,
		interp: false,
		isArray: false
	};

	if (typeof schemaConfig.x === 'undefined') {
		throw new Error('EventSchema must define x.');
	}

	if (typeof schemaConfig.y === 'undefined') {
		throw new Error('EventSchema must define y.');
	}

	var protocol = new Protocol(schemaConfig, config);
	protocol.type = 'LocalEvent';

	return protocol;
}

module.exports = LocalEventProtocol;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
//var config = require('../../config')


function MessageProtocol(schemaConfig, config) {
	schemaConfig[config.TYPE_PROPERTY_NAME] = {
		type: config.TYPE_BINARY_TYPE,
		interp: false,
		isArray: false
	};

	var protocol = new Protocol(schemaConfig, config);
	protocol.type = 'Message';

	return protocol;
}

module.exports = MessageProtocol;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
//var config = require('../../config')


function CommandProtocol(schemaConfig, config) {
    schemaConfig[config.TYPE_PROPERTY_NAME] = {
        type: config.TYPE_BINARY_TYPE,
        interp: false,
        isArray: false
    };

    var protocol = new Protocol(schemaConfig, config);
    protocol.type = 'Command';

    return protocol;
}

module.exports = CommandProtocol;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);

var readProp = function (bitStream, type, arrayIndexType) {
    var binaryMeta = Binary[type];
    if (typeof arrayIndexType === 'number') {
        var arrayIndexMeta = Binary[arrayIndexType];
        var length = bitStream[arrayIndexMeta.read]();

        var arr = [];
        for (var i = 0; i < length; i++) {
            if (binaryMeta.customRead) {
                var value = binaryMeta.read(bitStream);
                arr.push(value);
            } else {
                var value = bitStream[binaryMeta.read]();
                arr.push(value);
            }
        }
        return arr;
    } else {
        if (binaryMeta.customRead) {
            return binaryMeta.read(bitStream);
        } else {
            return bitStream[binaryMeta.read]();
        }
    }
};

module.exports = readProp;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var copyProxy = __webpack_require__(20);
var setValue = __webpack_require__(10);
var getValue = __webpack_require__(6);

function EntityCache() {
    this.state = {};
}

EntityCache.prototype.saveEntity = function (entity, protocol) {
    var copy = copyProxy(entity, protocol);
    copy.protocol = entity.protocol;
    this.state[entity.id] = copy;
};

EntityCache.prototype.deleteEntity = function (id) {
    delete this.state[id];
};

EntityCache.prototype.updateEntityPartial = function (id, path, value) {
    setValue(this.state[id], path, value);
};

EntityCache.prototype.updateEntityOptimized = function (id, path, deltaValue) {
    var value = getValue(this.state[id], path);
    setValue(this.state[id], path, value + deltaValue);
};

EntityCache.prototype.getEntity = function (id) {
    return this.state[id];
};

EntityCache.prototype.saveSnapshot = function (snapshot, protocols) {

    for (var i = 0; i < snapshot.createEntities.length; i++) {
        var entity = snapshot.createEntities[i];
        this.saveEntity(entity, entity.protocol);
    }

    for (var i = 0; i < snapshot.updateEntities.partial.length; i++) {
        var partial = snapshot.updateEntities.partial[i];
        this.updateEntityPartial(partial.id, partial.path, partial.value);
    }

    for (var i = 0; i < snapshot.updateEntities.optimized.length; i++) {
        var optimized = snapshot.updateEntities.optimized[i];
        optimized.updates.forEach(microOpt => {
            if (microOpt.isDelta) {
                // deltaValue
                this.updateEntityOptimized(optimized.id, microOpt.path, microOpt.value);
            } else {
                // exact value
                this.updateEntityPartial(optimized.id, microOpt.path, microOpt.value);
            }
        });
    }

    for (var i = 0; i < snapshot.deleteEntities.length; i++) {
        var id = snapshot.deleteEntities[i];
        this.deleteEntity(id);
    }

    // TODO clean this up
    for (var i = 0; i < snapshot.createComponents.length; i++) {
        var entity = snapshot.createComponents[i];
        this.saveEntity(entity, entity.protocol);
    }

    for (var i = 0; i < snapshot.updateComponents.partial.length; i++) {
        var partial = snapshot.updateComponents.partial[i];
        this.updateEntityPartial(partial.id, partial.path, partial.value);
    }

    for (var i = 0; i < snapshot.deleteComponents.length; i++) {
        var id = snapshot.deleteComponents[i];
        this.deleteEntity(id);
    }
};

module.exports = EntityCache;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var proxify = __webpack_require__(91);

function copyProxy(proxy, schema) {
    return proxify(proxy, schema);
}

module.exports = copyProxy;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);
const WeaponSystem = __webpack_require__(98);
const SAT = __webpack_require__(99);

class PlayerCharacter {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
        this.hitpoints = 100;
        this.isAlive = true;

        this.allowedX = 0;
        this.allowedY = 0;
        this.allowedPath = [];

        this.speed = 400;

        this.weaponSystem = new WeaponSystem();

        this.collider = new SAT.Circle(new SAT.Vector(this.x, this.y), 25);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.allowedX = x;
        this.allowedY = y;
        this.allowedPath = [];
        this.collider.pos.x = x;
        this.collider.pos.y = y;
    }

    takeDamage(amount) {
        if (this.isAlive) {
            this.hitpoints -= amount;
        }

        if (this.hitpoints <= 0 && this.isAlive) {
            this.hitpoints = 0;
            this.isAlive = false;

            // DEAD! respawn at random position after 1 second
            setTimeout(() => {
                this.hitpoints = 100;
                this.isAlive = 100;
                this.setPosition(Math.random() * 500, Math.random() * 500);
            }, 1000);
        }
    }

    fire() {
        if (!this.isAlive) {
            return false;
        }

        return this.weaponSystem.fire();
    }

    calculatePathLength() {
        let dist = 0;
        let currX = this.x;
        let currY = this.y;

        for (var i = this.allowedPath.length - 1; i >= 0; i--) {
            let next = this.allowedPath[i];
            let dx = next.x - currX;
            let dy = next.y - currY;
            let len = Math.sqrt(dx * dx + dy * dy);
            dist += len;
            currX = next.x;
            currY = next.y;
        }
        return dist;
    }

    update(delta) {
        // the total length of the path; how desynced the player is
        let totalDist = this.calculatePathLength();

        // how far a normal non-laggy player would be able to move this frame
        let distancePerFrame = this.speed * delta;

        let modifier = 1.0;
        if (distancePerFrame >= totalDist) {
            // we gud
        } else if (distancePerFrame < totalDist) {
            // more than one tick of desync between allowed xy and player xy
            modifier = Math.pow(totalDist / distancePerFrame, 0.5);
        }

        // clamp: no slower than normal movement speed, no faster than double movement speed
        if (modifier < 1) {
            modifier = 1;
        }
        if (modifier > 2) {
            modifier = 2;
        }

        // rubberbanding logic
        if (totalDist > 1200) {
            // reset the path, and rubberband the player
            console.log('rubberbanding', this.id);
            this.allowedPath = [];
            this.allowedX = this.x;
            this.allowedY = this.y;
            return;
        }

        // how much we are going to allow this entity to move this frame
        let movementBudget = distancePerFrame * modifier;

        // while the entity still has movement, and isn't caught up to alleged
        while (movementBudget > 0 && this.allowedPath.length > 0) {
            // head towards the next node
            let next = this.allowedPath.shift();
            let dx = next.x - this.x;
            let dy = next.y - this.y;

            let distanceToNextNode = Math.sqrt(dx * dx + dy * dy);

            if (movementBudget >= distanceToNextNode) {
                // movement is enough to make it to the next node           
                this.x = next.x;
                this.y = next.y;
                movementBudget -= distanceToNextNode;
            } else if (movementBudget < distanceToNextNode) {
                // movement can only go part way to the next node
                let ux = dx / distanceToNextNode;
                let uy = dy / distanceToNextNode;

                this.x += ux * movementBudget;
                this.y += uy * movementBudget;
                movementBudget = 0;
            }
        }
        if (this.allowedPath.length === 0) {}
        //console.log('path end')


        // keep the collider in sync 
        this.collider.pos.x = this.x;
        this.collider.pos.y = this.y;
    }

    move(command, isPrediction) {
        if (!this.isAlive) {
            return;
        }

        this.rotation = command.rotation;

        let unitX = 0;
        let unitY = 0;

        // create forces from input
        if (command.forward) {
            unitY -= 1;
        }
        if (command.backward) {
            unitY += 1;
        }
        if (command.left) {
            unitX -= 1;
        }
        if (command.right) {
            unitX += 1;
        }

        // normalize      
        let len = Math.sqrt(unitX * unitX + unitY * unitY);
        if (len > 0) {
            unitX = unitX / len;
            unitY = unitY / len;
        }

        this.allowedX += unitX * this.speed * command.delta;
        this.allowedY += unitY * this.speed * command.delta;

        if (isPrediction) {
            // in prediction  mode, move  the entity to this position immediately
            this.x = this.allowedX;
            this.y = this.allowedY;
        } else {
            // in non-prediction mode, save this movement as part of a path
            this.allowedPath.push({ x: this.allowedX, y: this.allowedY });
        }
    }
}

PlayerCharacter.protocol = {
    x: { type: nengi.Float32, interp: true },
    y: { type: nengi.Float32, interp: true },
    rotation: { type: nengi.RotationFloat32, interp: true },
    isAlive: nengi.Boolean,
    hitpoints: nengi.UInt8
};

module.exports = PlayerCharacter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

class MoveCommand {
    constructor(forward, left, backward, right, rotation, delta) {
        this.forward = forward;
        this.left = left;
        this.backward = backward;
        this.right = right;
        this.rotation = rotation;
        this.delta = delta;
    }
}

MoveCommand.protocol = {
    forward: nengi.Boolean,
    left: nengi.Boolean,
    backward: nengi.Boolean,
    right: nengi.Boolean,
    rotation: nengi.Float32,
    delta: nengi.Float32
};

module.exports = MoveCommand;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

class FireCommand {
    constructor(x, y) {
        // x,y or angle are both okay ways to represent firing
        this.x = x;
        this.y = y;
    }
}

FireCommand.protocol = {
    x: nengi.UInt32,
    y: nengi.UInt32
};

module.exports = FireCommand;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


const GameClient = __webpack_require__(25);

window.onload = function () {
    console.log('window loaded');
    const gameClient = new GameClient();
    let tick = 0;
    let previous = performance.now();
    const loop = function () {
        window.requestAnimationFrame(loop);
        let now = performance.now();
        let delta = (now - previous) / 1000;
        previous = now;
        tick++;

        gameClient.update(delta, tick, now);
    };

    loop();
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);
const nengiConfig = __webpack_require__(97);
const Simulator = __webpack_require__(103);

// interp delay, how long the interpolator holds data before begining to draw it
// this must be *at least* as long a server tick (e.g. 50 at 20 fps) and double is usually better
const interpDelay = 100;

class GameClient {
    constructor() {

        this.client = new nengi.Client(nengiConfig, interpDelay);
        this.simulator = new Simulator(this.client);

        this.client.onConnect(res => {
            console.log('onConnect response:', res);
        });

        this.client.onTransfer(clientData => {
            console.log('client transfer', clientData);
        });

        this.client.onClose(() => {
            console.log('connection closed');
        });

        if (window.location.href.indexOf('localhost') > -1) {
            this.client.connect('ws://localhost:8079');
        } else {
            // example of a production ip address
            this.client.connect('ws://173.199.127.115:8079');
        }
    }

    update(delta, tick, now) {
        let network = this.client.readNetwork();

        network.entities.forEach(snapshot => {
            snapshot.createEntities.forEach(entity => {
                this.simulator.createEntity(entity);
            });

            snapshot.updateEntities.forEach(update => {
                this.simulator.updateEntity(update);
            });

            snapshot.deleteEntities.forEach(id => {
                this.simulator.deleteEntity(id);
            });
        });

        network.messages.forEach(message => {
            this.simulator.processMessage(message);
        });

        network.localMessages.forEach(localMessage => {
            this.simulator.processLocalMessage(localMessage);
        });

        this.simulator.update(delta);
        this.client.update();
    }
}

module.exports = GameClient;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var createPropSchema = function (index, propConfig, throwOnAdvancedTypes) {
	var type = null;
	var interp = false;
	var isArray = false;
	var arrayIndexType = null;
	var protocol = null;

	if (typeof propConfig === 'object') {
		/* 
  * Object syntactic sugar, for advanced config, example:
  * 'propName' : { type: nengi.UInt8, interp: false }
  */

		// a subprotocol
		if (typeof propConfig.metaType !== 'undefined') {
			if (propConfig.metaType === 'protocol') {
				protocol = propConfig;
				if (throwOnAdvancedTypes) {
					throw new Error('this protocol type does not support nested protocols; index: ' + index + '  propConfig: ' + propConfig);
				}
			}
		}

		type = propConfig.type;

		// an array of subprotocols
		/*
  if (typeof type !== 'undefined') {
  	if (typeof type.metaType !== 'undefined') {
  		if (type.metaType === 'protocol') {
  			protocol = propConfig.type
  			if (throwOnAdvancedTypes) {
  				throw new Error('this protocol type does not support nested protocols; index: ' + index + '  propConfig: ' + JSON.stringify(propConfig))
  			}
  		}
  	}
  }
  */

		// interpolation flag
		if (typeof propConfig.interp !== 'undefined') {
			interp = propConfig.interp;
		}

		// an array of values
		if (typeof propConfig.indexType !== 'undefined') {

			if (typeof propConfig.type.prototype !== 'undefined') {
				// array of type protocol
				type = propConfig.type.prototype.protocol;
				protocol = propConfig.type.prototype.protocol;
				//console.log('array of subprotocols', propConfig)
			} else {
				// array of basic types (uint,int,bool,string, etc)
				//console.log('regular array', propConfig)
				type = propConfig.type;
			}
			//console.log('ARRAY of values', propConfig, propConfig.type.prototype.protocol)
			isArray = true;
			arrayIndexType = propConfig.indexType;
			if (throwOnAdvancedTypes) {
				throw new Error('this protocol type does not support arrays; index: ' + index + '  propConfig: ' + propConfig);
			}
		}
	} else {
		/* 
  * Simple syntax, example:
  * 'propName' : nengi.UInt16
  */
		type = propConfig;
	}

	return {
		key: index,
		protocol: protocol,
		type: type,
		interp: interp,
		isArray: isArray,
		arrayIndexType: arrayIndexType
	};
};

module.exports = createPropSchema;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var createOptSchema = function (index, optConfig) {
	var type = -1;
	var delta = false;

	if (typeof optConfig === 'object') {

		type = optConfig.type;

		// interpolation flag
		if (typeof optConfig.delta !== 'undefined') {
			delta = optConfig.delta;
		}
	} else {
		throw new Error('unknown schema optimization syntax; index: ' + index + ' optConfig: ' + optConfig);
	}

	return {
		key: index,
		type: type,
		delta: delta
	};
};

module.exports = createOptSchema;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Type = __webpack_require__(1);
var Binary = __webpack_require__(0);

var UIntTypes = [Type.UInt2, Type.UInt3, Type.UInt4, Type.UInt5, Type.UInt6, Type.UInt7, Type.UInt8, Type.UInt9, Type.UInt10, Type.UInt11, Type.UInt12, Type.UInt16, Type.UInt32];

var selectUIntType = function (max) {
    for (var i = 0; i < UIntTypes.length; i++) {
        var type = UIntTypes[i];
        if (Binary[type].max >= max) {
            return type;
        }
    }

    throw new Error('selectUIntType max out of bounds');
};

module.exports = selectUIntType;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
* Definition of a Boolean
* size is 1 bit
* uses BitBuffer functions for write/read
* should never be interpolated (what is halfway between true and false? so esoteric)
*/
var bool = {
    'bits': 1,
    'write': 'writeBoolean',
    'read': 'readBoolean'
    //'interp': 'never'
};

bool.boundsCheck = function (value) {
    return typeof value === 'boolean';
};

bool.compare = function (a, b) {
    return {
        a: a,
        b: b,
        isChanged: a !== b
    };
};

module.exports = bool;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt2, an unsigned 2 bit integer
* range: 0 to 3
* uses BitBuffer functions for write/read
*/
var UInt2 = {
    'min': 0,
    'max': 3,
    'bits': 2,
    'compare': __webpack_require__(2),
    'write': 'writeUInt2',
    'read': 'readUInt2'
};

UInt2.boundsCheck = function (value) {
    return value >= UInt2.min && value <= UInt2.max;
};

module.exports = UInt2;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt3, an unsigned 3 bit integer
* range: 0 to 7
* uses BitBuffer functions for write/read
*/
var UInt3 = {
    'min': 0,
    'max': 7,
    'bits': 3,
    'compare': __webpack_require__(2),
    'write': 'writeUInt3',
    'read': 'readUInt3'
};

UInt3.boundsCheck = function (value) {
    return value >= UInt3.min && value <= UInt3.max;
};

module.exports = UInt3;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt4, an unsigned 4 bit integer
* range: 0 to 15
* uses BitBuffer functions for write/read
*/
var UInt4 = {
    'min': 0,
    'max': 15,
    'bits': 4,
    'compare': __webpack_require__(2),
    'write': 'writeUInt4',
    'read': 'readUInt4'
};

UInt4.boundsCheck = function (value) {
    return value >= UInt4.min && value <= UInt4.max;
};

module.exports = UInt4;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt5, an unsigned 5 bit integer
* range: 0 to 31
* uses BitBuffer functions for write/read
*/
var UInt5 = {
    'min': 0,
    'max': 31,
    'bits': 5,
    'compare': __webpack_require__(2),
    'write': 'writeUInt5',
    'read': 'readUInt5'
};

UInt5.boundsCheck = function (value) {
    return value >= UInt5.min && value <= UInt5.max;
};

module.exports = UInt5;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt6, an unsigned 6 bit integer
* range: 0 to 63
* uses BitBuffer functions for write/read
*/
var UInt6 = {
    'min': 0,
    'max': 63,
    'bits': 6,
    'compare': __webpack_require__(2),
    'write': 'writeUInt6',
    'read': 'readUInt6'
};

UInt6.boundsCheck = function (value) {
    return value >= UInt6.min && value <= UInt6.max;
};

module.exports = UInt6;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt7, an unsigned 7 bit integer
* range: 0 to 127
* uses BitBuffer functions for write/read
*/
var UInt7 = {
    'min': 0,
    'max': 127,
    'bits': 7,
    'compare': __webpack_require__(2),
    'write': 'writeUInt7',
    'read': 'readUInt7'
};

UInt7.boundsCheck = function (value) {
    return value >= UInt7.min && value <= UInt7.max;
};

module.exports = UInt7;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt9, an usigned 9 bit integer
* range: 0 to 511
* uses BitBuffer functions for write/read
*/
var UInt9 = {
    'min': 0,
    'max': 511,
    'bits': 9,
    'compare': __webpack_require__(2),
    'write': 'writeUInt9',
    'read': 'readUInt9'
};

UInt9.boundsCheck = function (value) {
    return value >= UInt9.min && value <= UInt9.max;
};

module.exports = UInt9;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt10, an unsigned 10 bit integer
* range: 0 to 1023
* uses BitBuffer functions for write/read
*/
var UInt10 = {
    'min': 0,
    'max': 1023,
    'bits': 10,
    'compare': __webpack_require__(2),
    'write': 'writeUInt10',
    'read': 'readUInt10'
};

UInt10.boundsCheck = function (value) {
    return value >= UInt10.min && value <= UInt10.max;
};

module.exports = UInt10;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt11, an unsigned 11 bit integer
* range: 0 to 2047
* uses BitBuffer functions for write/read
*/
var UInt11 = {
    'min': 0,
    'max': 2047,
    'bits': 11,
    'compare': __webpack_require__(2),
    'write': 'writeUInt11',
    'read': 'readUInt11'
};

UInt11.boundsCheck = function (value) {
    return value >= UInt11.min && value <= UInt11.max;
};

module.exports = UInt11;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt12, an unsigned 12 bit integer
* range: 0 to 2047
* uses BitBuffer functions for write/read
*/
var UInt12 = {
    'min': 0,
    'max': 4095,
    'bits': 12,
    'compare': __webpack_require__(2),
    'write': 'writeUInt12',
    'read': 'readUInt12'
};

UInt12.boundsCheck = function (value) {
    return value >= UInt12.min && value <= UInt12.max;
};

module.exports = UInt12;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt16, an unsigned 16 bit integer
* range: 0 to 65535
* uses BitBuffer functions for write/read
*/
var UInt16 = {
    'min': 0,
    'max': 65535,
    'bits': 16,
    'compare': __webpack_require__(2),
    'write': 'writeUInt16',
    'read': 'readUInt16'
};

UInt16.boundsCheck = function (value) {
    return value >= UInt16.min && value <= UInt16.max;
};

module.exports = UInt16;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an UInt32, an unsigned 32 bit integer
* range: 0 to 4294967295
* uses BitBuffer functions for write/read
*/
var UInt32 = {
    'min': 0,
    'max': 4294967295,
    'bits': 32,
    'compare': __webpack_require__(2),
    'write': 'writeUInt32',
    'read': 'readUInt32'
};

UInt32.boundsCheck = function (value) {
    return value >= UInt32.min && value <= UInt32.max;
};

module.exports = UInt32;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int4, a signed 4 bit integer
* range: -8 to 7
* uses BitBuffer functions for write/read
*/
var Int4 = {
    'min': -8,
    'max': 7,
    'bits': 4,
    'compare': __webpack_require__(2),
    'write': 'writeInt4',
    'read': 'readInt4'
};

Int4.boundsCheck = function (value) {
    return value >= Int4.min && value <= Int4.max;
};

module.exports = Int4;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int6, a signed 6 bit integer
* range: -32 to 31
* uses BitBuffer functions for write/read
*/
var Int6 = {
    'min': -32,
    'max': 31,
    'bits': 6,
    'compare': __webpack_require__(2),
    'write': 'writeInt6',
    'read': 'readInt6'
};

Int6.boundsCheck = function (value) {
    return value >= Int6.min && value <= Int6.max;
};

module.exports = Int6;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int8, a signed 8 bit integer
* range: -128 to 127
* uses BitBuffer functions for write/read
*/
var Int8 = {
    'min': -128,
    'max': 127,
    'bits': 8,
    'compare': __webpack_require__(2),
    'write': 'writeInt8',
    'read': 'readInt8'
};

Int8.boundsCheck = function (value) {
    return value >= Int8.min && value <= Int8.max;
};

module.exports = Int8;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int10, a signed 10 bit integer
* range: -512 to 511
* uses BitBuffer functions for write/read
*/
var Int10 = {
    'min': -512,
    'max': 511,
    'bits': 10,
    'compare': __webpack_require__(2),
    'write': 'writeInt10',
    'read': 'readInt10'
};

Int10.boundsCheck = function (value) {
    return value >= Int10.min && value <= Int10.max;
};

module.exports = Int10;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int16, a signed 16 bit integer
* range: -32768 to 32767
* uses BitBuffer functions for write/read
*/
var Int16 = {
    'min': -32768,
    'max': 32767,
    'bits': 16,
    'compare': __webpack_require__(2),
    'write': 'writeInt16',
    'read': 'readInt16'
};

Int16.boundsCheck = function (value) {
    return value >= Int16.min && value <= Int16.max;
};

module.exports = Int16;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Int32, a signed 32 bit integer
* range: -2147483648 to 2147483647
* uses BitBuffer functions for write/read
*/
var Int32 = {
    'min': -2147483648,
    'max': 2147483647,
    'bits': 32,
    'compare': __webpack_require__(2),
    'write': 'writeInt32',
    'read': 'readInt32'
};

Int32.boundsCheck = function (value) {
    return value >= Int32.min && value <= Int32.max;
};

module.exports = Int32;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Float32
* uses BitBuffer functions for write/read
*/
var Float32 = {
    'bits': 32,
    'compare': __webpack_require__(11),
    'write': 'writeFloat32',
    'read': 'readFloat32'
};

Float32.boundsCheck = function (value) {
    return true; //value >= Float32.min && value <= Float32.max
};

module.exports = Float32;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Definition of an Float64
* uses BitBuffer functions for write/read
*/
var Float64 = {
    'bits': 64,
    'compare': __webpack_require__(11),
    'write': 'writeFloat64',
    'read': 'readFloat64'
};

Float64.boundsCheck = function (value) {
    return true; //value >= Float32.min && value <= Float32.max
};

module.exports = Float64;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
* Definition of an EntityId, an usigned 8 bit integer
* range: 0 to 255
* uses BitBuffer functions for write/read
*/
var EntityId = {
    'min': 0,
    'max': 255,
    'boundsCheck': boundsCheck,
    'bits': 8,
    'write': 'writeUInt8',
    'read': 'readUInt8'
};

var boundsCheck = function (value) {
    return value >= EntityId.min && value <= EntityId.max;
};

module.exports = EntityId;

/***/ }),
/* 51 */
/***/ (function(module, exports) {


var scale = function (n, a, b, c, d) {
  return (d - c) * (n - a) / (b - a) + c;
};

var write = function (bitStream, value) {
  // no longer write the converted value
  // is there a bug on initial creation?
  bitStream.writeUInt8(value);
};

var read = function (bitStream) {
  var rawValue = bitStream.readUInt8();
  return byteToRadians(rawValue);
};

var compare = function (a, b) {
  var intA = radiansToByte(a);
  var intB = radiansToByte(b);

  return {
    a: intA,
    b: intB,
    isChanged: intA !== intB
  };
};

var countBits = function () {
  return 8;
};

var boundsCheck = function (value) {
  return value >= Rotation8.min && value <= Rotation8.max;
};

var radiansToByte = function (radians) {
  return Math.floor(scale(radians, 0, 2 * Math.PI, 0, 255) % 256);
};

var byteToRadians = function (uint8) {
  return uint8 * (2 * Math.PI / 255);
};

/*
* Interpolates radians as a rotation around a circle, carefully
* wraps around 0 and 255 choosing the intuitive direction to turn
* @method interp
* @param {UInt8} a First angle as a byte
* @param {UInt8} b Second angle as a byte
* @param {Number} ratio Amount to interpolate (0 -> a, 1 -> b, 0.5 -> halfway)
* @return {Number} Returns the new angle
*/
var interp = function (a, b, ratio) {
  throw new Error('nengi.Rotation8 interpolation is not implemented. Try nengi.RotationFloat32 instead.');
  //console.log('interp', a, b, ratio)
  //return interpRot = lerp(a, b, ratio)
  var PI = Math.PI;
  var whole = 2 * PI;
  var quarter = PI / 2;
  var threeQuarters = 3 * PI / 2;

  if (a < quarter && b > threeQuarters) {
    return interpRot = lerp(a + whole, b, ratio) - whole;
  } else if (a > threeQuarters && b < quarter) {
    return interpRot = lerp(a, b + whole, ratio) - whole;
  } else {
    return interpRot = lerp(a, b, ratio);
  }
};

var lerp = function (a, b, portion) {
  return a + (b - a) * portion;
};

/* A rotation mapped to an unsigned 8 bit integer, autoconverts from radians
* i.e. a 256 degree circle (0-255, specifically) instead of a 360 degree circle
* range: 0 to 255
* uses BitBuffer functions for write/read
*/
var Rotation8 = {
  'min': 0,
  'max': 255,
  'interp': interp,
  'boundsCheck': boundsCheck,
  'compare': compare,
  'bits': 8,
  'customWrite': true,
  'write': write,
  'customRead': true,
  'read': read
};

module.exports = Rotation8;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


const write = function (bitStream, value) {
    bitStream.writeFloat32(value);
};

const read = function (bitStream) {
    return bitStream.readFloat32();
};
const countBits = function () {
    return 32;
};

const lerpRot = function (a, b, amount) {
    let s = (1 - amount) * Math.sin(a) + amount * Math.sin(b);
    let c = (1 - amount) * Math.cos(a) + amount * Math.cos(b);
    return Math.atan2(s, c);
};

const RotationFloat32 = {
    'min': 0,
    'max': 255,
    'interp': lerpRot,
    'compare': __webpack_require__(11),
    'bits': 32,
    'customWrite': true,
    'write': write,
    'customRead': true,
    'read': read
};

module.exports = RotationFloat32;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var UInt8 = __webpack_require__(12);

// compare not used yet
var compare = function (a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
};

var boundsCheck = function (value) {
	return value[0] >= UInt8.min && value[0] <= UInt8.max && value[1] >= UInt8.min && value[1] <= UInt8.max && value[2] >= UInt8.min && value[2] <= UInt8.max;
};

var write = function (bitStream, value) {
	bitStream.writeUInt8(value[0]);
	bitStream.writeUInt8(value[1]);
	bitStream.writeUInt8(value[2]);
};

var read = function (bitStream) {
	var r = bitBuffer.readUInt8();
	var g = bitBuffer.readUInt8();
	var b = bitBuffer.readUInt8();
	return [r, g, b];
};

/**
* Definition of an RGB888, a 3-component color with 1 byte per component
* range
*	 value[0]: 0 to 255
*	 value[1]: 0 to 255
*	 value[2]: 0 to 255
* uses BitBuffer functions for write/read
*/
var RGB888 = {
	'customCompare': true,
	'compare': compare,
	'boundsCheck': boundsCheck,
	'bits': 24,
	'customWrite': true,
	'write': write,
	'customRead': true,
	'read': read
};

module.exports = RGB888;

/***/ }),
/* 54 */
/***/ (function(module, exports) {


var boundsCheck = function (value) {
    return value.length < 256;
};

/**
* Serializes value and writes it to the buffer as an ascii string.
* The first byte will be the length of the string, and the subsequent
* bytes will be the character codes.
*/
var write = function (bitStream, value) {
    var byteArray = convertASCIIStringToByteArray(value);

    for (var i = 0; i < byteArray.length; i++) {
        bitStream.writeUInt8(byteArray[i]);
    }
};

var read = function (bitStream) {
    var length = bitStream.readUInt8();
    var string = '';
    for (var i = 0; i < length; i++) {
        string += String.fromCharCode(bitStream.readUInt8());
    }
    return string;
};

var countBits = function (string) {
    var bits = 8; // will represent the string length
    bits += string.length * 8;
    return bits;
};

var convertASCIIStringToByteArray = function (string) {
    //console.log('convertASCIIStringToByteArray', string)
    var arr = [];
    if (string.length < 256) {
        arr.push(string.length);
    } else {
        throw new Error('ASCIIString exceeded 255 character limit: ' + string);
    }
    for (var i = 0; i < string.length; i++) {
        arr.push(string.charCodeAt(i));
    }
    return arr;
};

/**
* Definition of an ASCIIString, a string that using 1 byte per character
* the string may be up to 255 characters long
* uses BitBuffer UInt8 functions for write/read
*/
var ASCIIString = {
    'boundsCheck': boundsCheck,
    'customBits': true,
    'countBits': countBits,
    'customWrite': true,
    'write': write,
    'customRead': true,
    'read': read
};

ASCIIString.compare = function (a, b) {
    return {
        a: a,
        b: b,
        isChanged: a !== b
    };
};

module.exports = ASCIIString;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var utf8 = __webpack_require__(13);

var boundsCheck = function (value) {
    return value.length <= 4294967295;
};

var write = function (bitStream, value) {
    var encoded = utf8.encode(value);
    bitStream.writeUInt32(encoded.length);
    for (var i = 0; i < encoded.length; i++) {
        bitStream.writeUInt8(encoded.charCodeAt(i));
    }
};

var read = function (bitStream) {
    var length = bitStream.readUInt32();
    var encoded = '';
    for (var i = 0; i < length; i++) {
        encoded += String.fromCharCode(bitStream.readUInt8());
    }
    return utf8.decode(encoded);
};

var countBits = function (string) {
    var bits = 32; // will represent the string length
    bits += utf8.encode(string).length * 8;
    return bits;
};

var UTF8String = {
    'boundsCheck': boundsCheck,
    'customBits': true,
    'countBits': countBits,
    'customWrite': true,
    'write': write,
    'customRead': true,
    'read': read
};

UTF8String.compare = function (a, b) {
    return {
        a: a,
        b: b,
        isChanged: a !== b
    };
};

module.exports = UTF8String;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ProtocolMap = __webpack_require__(57);
var readSnapshotBuffer = __webpack_require__(59);
var createCommandBuffer = __webpack_require__(80);
var createPongBuffer = __webpack_require__(87);
var createHandshakeBuffer = __webpack_require__(90);
var EntityCache = __webpack_require__(19);
var Binary = __webpack_require__(0);
var getValue = __webpack_require__(6);

var WorldState = __webpack_require__(92);
const metaConfig = __webpack_require__(94);

function Client(config, interpDelay) {
    this.config = config;
    this.interpDelay = interpDelay;
    this.protocols = new ProtocolMap(config, metaConfig);

    // unconfirmedCommands is a map with clientTicks as keys
    this.unconfirmedCommands = new Map();

    this.tickLength = 1000 / config.UPDATE_RATE;

    this.entityCache = new EntityCache();
    this.interpCache = new EntityCache();

    this.websocket = null;

    this.snapshots = [];
    this.latest = null;

    // a count of ticks received from the server
    this.serverTick = 0;

    this.updateTick = 0;

    this.lastProcessedTick = -1;
    this.onStringData = null;

    this.sendQueue = {};
    this.lastSentTick = 0;

    this.averagePing = 100;
    this.pings = [];

    this.avgDiff = 0;
    this.avgDiffs = [];
    this.connectionCallback = null;
    this.closeCallback = null;
    this.transferCallback = null;

    this.messages = [];
    this.localMessages = [];
    this.jsons = [];
}

Client.prototype.reset = function () {
    this.websocket.close();
    this.entityCache = new EntityCache();
    this.cache = new EntityCache();

    this.snapshots = [];

    //this.latest = null
    this.serverTick = 0;
    this.updateTick = 0;
    this.lastProcessedTick = -1;
    this.sendQueue = {};
    this.lastSentTick = 0;
    this.averagePing = 100;
    this.pings = [];
    this.avgDiff = 0;
    this.avgDiffs = [];
};

Client.prototype.readNetwork = function () {
    let result = this.interpolate(this.interpDelay);
    result.latest = this.latest;
    result.messages = this.messages.splice(0, this.messages.length);
    result.localMessages = this.localMessages.splice(0, this.localMessages.length);
    result.jsons = this.jsons.splice(0, this.jsons.length);
    return result;
};

Client.prototype.onClose = function (cb) {
    this.closeCallback = cb;
};

Client.prototype.onTransfer = function (cb) {
    this.transferCallback = (transferKey, address) => {
        var clientData = { transferKey: transferKey };
        cb(clientData);
        this.reset();
        this.connect(address, clientData);
    };
};

Client.prototype.onConnect = function (cb) {
    this.connectionCallback = cb;
};

Client.prototype.update = function () {
    for (var i = this.lastSentTick; i < this.updateTick; i++) {
        this.sendCommands(i);
        //console.log('sending', i)
        this.lastSentTick = i;
    }
    this.updateTick++;
};

Client.prototype.getUnconfirmedCommands = function () {
    return this.unconfirmedCommands;
};

Client.prototype.addCommand = function (command) {
    var tick = this.updateTick;
    if (typeof this.sendQueue[tick] === 'undefined') {
        this.sendQueue[tick] = [];
    }
    if (!this.unconfirmedCommands.has(tick)) {
        this.unconfirmedCommands.set(tick, []);
    }
    command.type = this.protocols.getIndex(command.protocol);
    this.sendQueue[tick].push(command);
    this.unconfirmedCommands.get(tick).push(command);
};

Client.prototype.sendCommands = function (tick) {
    if (this.websocket && this.websocket.readyState === 1) {
        var commands = this.sendQueue[tick];
        if (!commands) {
            commands = [];
        }
        this.websocket.send(createCommandBuffer(tick, commands).byteArray);
        delete this.sendQueue[tick];
    }
};

Client.prototype.findInitialSnapshot = function (renderTime) {
    for (var i = this.snapshots.length - 1; i >= 0; i--) {
        var snapshot = this.snapshots[i];
        if (snapshot.timestamp < renderTime) {
            return { snapshot: snapshot, index: i };
        }
    }
};

var lerp2 = function (a, b, portion) {
    return a + (b - a) * portion;
};

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

//ar prev = Date.now()
var prev = 0;
Client.prototype.interpolate = function (interpDelay) {
    var renderTime = Date.now() - interpDelay - this.avgDiff;
    prev = renderTime;

    var late = [];

    var snapshotOlderIndex = null;
    var snapshotNewer = null;
    var snapshotOlder = null;

    var initialSnapshotData = this.findInitialSnapshot(renderTime);

    if (initialSnapshotData) {
        snapshotOlder = initialSnapshotData.snapshot;
        snapshotOlderIndex = initialSnapshotData.index;
    }

    if (snapshotOlder) {
        var olderTick = snapshotOlder.tick;
        for (var i = 0; i < this.snapshots.length; i++) {
            var tempSnapshot = this.snapshots[i];
            if (tempSnapshot.tick === olderTick + 1) {
                snapshotNewer = tempSnapshot;
            }
        }

        var iSnapshot = {
            createEntities: [],
            deleteEntities: [],
            updateEntities: [],
            localMessages: [],
            messages: [],
            jsons: [],
            tick: null
        };

        if (snapshotOlder.tick - 1 > this.lastProcessedTick) {
            for (var i = this.snapshots.length - 1; i > -1; i--) {
                var ss = this.snapshots[i];
                if (ss.tick < snapshotOlder.tick && !ss.processed) {
                    late.push(ss);
                    ss.processed = true;
                    this.snapshots.splice(i, 1);
                }
            }
        }

        late.reverse();

        for (var j = 0; j < late.length; j++) {
            var ss = late[j];
            for (var i = 0; i < ss.createEntities.length; i++) {
                this.interpCache.saveEntity(ss.createEntities[i], ss.createEntities[i].protocol);
            }

            for (var i = 0; i < ss.updateEntities.length; i++) {
                this.interpCache.updateEntityPartial(ss.updateEntities[i].id, ss.updateEntities[i].path, ss.updateEntities[i].value);
            }

            for (var i = 0; i < ss.deleteEntities.length; i++) {
                this.interpCache.deleteEntity(ss.deleteEntities[i]);
            }
        }

        if (!snapshotOlder.processed) {
            iSnapshot.timestamp = snapshotOlder.timestamp;
            iSnapshot.createEntities = iSnapshot.createEntities.concat(snapshotOlder.createEntities);
            iSnapshot.deleteEntities = iSnapshot.deleteEntities.concat(snapshotOlder.deleteEntities);
            iSnapshot.updateEntities = iSnapshot.updateEntities.concat(snapshotOlder.updateEntities);
            snapshotOlder.processed = true;
            iSnapshot.tick = snapshotOlder.tick;
            this.lastProcessedTick = snapshotOlder.tick;

            for (var i = 0; i < iSnapshot.createEntities.length; i++) {
                this.interpCache.saveEntity(iSnapshot.createEntities[i], iSnapshot.createEntities[i].protocol);
            }

            for (var i = 0; i < iSnapshot.updateEntities.length; i++) {
                this.interpCache.updateEntityPartial(iSnapshot.updateEntities[i].id, iSnapshot.updateEntities[i].path, iSnapshot.updateEntities[i].value);
            }

            for (var i = 0; i < iSnapshot.deleteEntities.length; i++) {
                this.interpCache.deleteEntity(iSnapshot.deleteEntities[i]);
            }
        }
    }

    //console.log('late', late.length, (snapshotOlder == true))
    if (snapshotNewer && snapshotOlder) {
        if (snapshotOlder.tick >= this.lastProcessedTick) {
            var total = this.tickLength;
            var portion = renderTime - snapshotOlder.timestamp;
            var ratio = portion / total;

            if (ratio > 1.0) {
                //console.log('ratio > 1')
                ratio = 1.0;
            }

            iSnapshot.timestamp = lerp(snapshotOlder.timestamp, snapshotNewer.timestamp, ratio);

            for (var i = 0; i < snapshotOlder.updateEntities.length; i++) {
                var update = snapshotOlder.updateEntities[i];

                var entityOlder = snapshotOlder.entities.get(update.id);
                var prop = update.prop;
                var propData = entityOlder.protocol.properties[prop];

                var binaryType = Binary[propData.type];

                if (propData.interp) {
                    var entityNewer = snapshotNewer.entities.get(update.id);

                    var valueOlder = getValue(entityOlder, propData.path);
                    var valueInterp = valueOlder;
                    if (entityNewer) {
                        var valueNewer = getValue(entityNewer, propData.path);

                        if (typeof binaryType.interp === 'function') {
                            valueInterp = binaryType.interp(valueOlder, valueNewer, ratio);
                        } else {
                            valueInterp = lerp(valueOlder, valueNewer, ratio);
                        }
                    }

                    if (valueInterp !== getValue(this.interpCache.getEntity(update.id), propData.path)) {
                        iSnapshot.updateEntities.push({
                            id: update.id,
                            prop: prop,
                            path: propData.path,
                            value: valueInterp
                        });
                    }
                } else {
                    if (update.value !== getValue(this.interpCache.getEntity(update.id), update.path)) {
                        iSnapshot.updateEntities.push(update);
                    }
                }
            }
        }
    } else {
        // extrapolation could go here. disabled for now.
        //console.log('xtrap')
    }

    if (iSnapshot) {
        for (var i = 0; i < iSnapshot.updateEntities.length; i++) {
            this.interpCache.updateEntityPartial(iSnapshot.updateEntities[i].id, iSnapshot.updateEntities[i].path, iSnapshot.updateEntities[i].value);
        }
        //console.log('pushing isnap')
        late.push(iSnapshot);
    }

    return {
        entities: late,
        interpA: snapshotOlder,
        interpB: snapshotNewer
    };
};

Client.prototype.getSnapshots = function () {
    return this.snapshots;
};

Client.prototype.connect = function (address, handshake) {
    this.websocket = new WebSocket(address, 'nengi-protocol');
    this.websocket.binaryType = 'arraybuffer';

    if (typeof handshake === 'undefined' || !handshake) {
        handshake = {};
    }

    this.websocket.onopen = event => {
        this.websocket.send(createHandshakeBuffer(handshake).byteArray);
        //this.connectCallback = connectCallback
        //if (this.connectCallback) {
        //    this.connectCallback()
        //}
    };

    this.websocket.onerror = err => {
        //if (this.on)
        console.log('WebSocket error', err);
    };

    this.websocket.onclose = () => {
        if (this.closeCallback) {
            this.closeCallback();
        }
        //throw new Error('stopping game loop, connection to server closed')
    };

    this.websocket.onmessage = message => {
        if (message.data instanceof ArrayBuffer) {
            var snapshot = readSnapshotBuffer(message.data, this.protocols, this.entityCache, this.config, this.connectionCallback, this.transferCallback);
            // some messages aren't snapshots (connection & transfer)
            if (!snapshot) {
                return;
            }

            this.messages = this.messages.concat(snapshot.messages);
            this.localMessages = this.localMessages.concat(snapshot.localMessages);
            this.jsons = this.jsons.concat(snapshot.jsons);

            if (snapshot.pingKey !== -1) {
                //console.log('pingKEY')
                var pongBuffer = createPongBuffer(snapshot.pingKey);
                //console.log(pongBuffer.byteArray)
                this.websocket.send(pongBuffer.byteArray);
            }
            if (snapshot.avgLatency !== -1) {
                //console.log('avg latency', snapshot.avgLatency)
                this.averagePing = snapshot.avgLatency;
            }

            var worldState = new WorldState(this.serverTick, this.tickLength, snapshot, this.latest);

            this.avgDiffs.push(Date.now() - worldState.timestamp);

            var total = 0;
            for (var i = 0; i < this.avgDiffs.length; i++) {
                total += this.avgDiffs[i];
            }
            this.avgDiff = total / this.avgDiffs.length;
            while (this.avgDiffs.length > 20) {
                this.avgDiffs.shift();
            }

            this.latest = worldState;
            this.unconfirmedCommands.forEach((command, key) => {
                if (key <= this.latest.clientTick) {
                    this.unconfirmedCommands.delete(key);
                }
            });

            this.snapshots.push(worldState);
            this.serverTick++;

            if (this.snapshots[this.snapshots.length - 20]) {
                if (this.snapshots[this.snapshots.length - 20].processed) {
                    this.snapshots.splice(this.snapshots.length - 20, 1);
                }
            }
        } else if (typeof message.data === 'string') {
            //console.log('received string from server, ignoring', message.data)
            if (typeof this.onStringData === 'function') {
                this.onStringData(message.data);
            }
        } else {
            console.log('unknown websocket data type');
        }
    };
};

module.exports = Client;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
var EntityProtocol = __webpack_require__(14);
var MessageProtocol = __webpack_require__(16);
var LocalEventProtocol = __webpack_require__(15);
var CommandProtocol = __webpack_require__(17);
var ComponentProtocol = __webpack_require__(58);

function ProtocolMap(config, metaConfig) {
    this.lookupByIndex = new Map();
    this.lookupByProtocol = new Map();
    this.protocolIndex = 0;

    //this.processProtocols(meta, config, )

    this.lookupMetaByIndex = new Map();
    this.lookupMetaByProtocol = new Map();

    this.processMeta(config, metaConfig, 'messages');

    this.processProtocols(config, 'basics', Protocol);
    this.processProtocols(config, 'entities', EntityProtocol);
    this.processProtocols(config, 'components', EntityProtocol);
    this.processProtocols(config, 'messages', MessageProtocol);
    this.processProtocols(config, 'localMessages', LocalEventProtocol);
    this.processProtocols(config, 'commands', CommandProtocol);
}

ProtocolMap.prototype.processMeta = function (config, metaConfig, configSection) {
    for (var i = 0; i < metaConfig[configSection].length; i++) {

        var name = metaConfig[configSection][i][0];
        var protocolConfig = metaConfig[configSection][i][1];
        var type = metaConfig[configSection][i][2];

        var protocol = new MessageProtocol(protocolConfig, config);
        this.lookupMetaByIndex.set(type, protocol);
        this.lookupMetaByProtocol.set(protocol, type);
        protocol.name = name;

        //console.log('protocol', protocol)
    }
};

ProtocolMap.prototype.processProtocols = function (config, configSection, protocolConstructor) {
    let section = config.protocols[configSection];
    if (!section) {
        return;
    }
    for (var i = 0; i < section.length; i++) {
        let entry = section[i];
        if (Array.isArray(entry)) {
            var name = entry[0];
            var ctor = entry[1];
            if (entry.length === 2) {
                //console.log('ctor mode')
                // nengi beta Constructor mode       
                var protocolConfig = ctor.protocol;
                var protocol = new protocolConstructor(protocolConfig, config);
                this.lookupByIndex.set(this.protocolIndex, protocol);
                this.lookupByProtocol.set(protocol, this.protocolIndex);
                // mutates prototype
                ctor.prototype.protocol = protocol;
                // mutates protocol, adding a name
                protocol.name = name;
                this.protocolIndex++;

                //console.log(name, this.protocolIndex)
            } else {
                //console.log('factory mode')
                // nengi beta factory mode
                var protocolConfig = entry[2];
                var type = entry[3];
                var protocol = new protocolConstructor(protocolConfig, config);
                this.lookupByIndex.set(type, protocol);
                this.lookupByProtocol.set(protocol, type);
                protocol.name = name;
            }
        } else {
            // new syntax mode
            //console.log('new syntax')
            if (configSection === 'components') {
                let protocol = new ComponentProtocol(entry.protocol, config, entry.components);
                this.lookupByIndex.set(entry.type, protocol);
                this.lookupByProtocol.set(protocol, entry.type);
                protocol.name = entry.name;
            }
            if (configSection === 'entities') {
                let protocol = new EntityProtocol(entry.protocol, config, entry.components);
                this.lookupByIndex.set(entry.type, protocol);
                this.lookupByProtocol.set(protocol, entry.type);
                protocol.name = entry.name;
            }
        }
    }

    // console.log(this)
};

ProtocolMap.prototype.getMetaProtocol = function (index) {
    return this.lookupMetaByIndex.get(index);
};

ProtocolMap.prototype.getMetaIndex = function (protocol) {
    return this.lookupMetaByProtocol.get(protocol);
};

ProtocolMap.prototype.getProtocol = function (index) {
    return this.lookupByIndex.get(index);
};

ProtocolMap.prototype.getIndex = function (protocol) {
    return this.lookupByProtocol.get(protocol);
};

module.exports = ProtocolMap;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Protocol = __webpack_require__(5);
//var config = require('../../config')


function ComponentProtocol(schemaConfig, config, components) {
    schemaConfig[config.TYPE_PROPERTY_NAME] = {
        type: config.TYPE_BINARY_TYPE,
        interp: false,
        isArray: false
    };

    schemaConfig[config.ID_PROPERTY_NAME] = {
        type: config.ID_BINARY_TYPE,
        interp: false,
        isArray: false
    };

    schemaConfig[config.PARENT_ID_PROPERTY_NAME] = {
        type: config.ID_BINARY_TYPE,
        interp: false,
        isArray: false

        /*
        if (typeof schemaConfig.x === 'undefined') {
            throw new Error('EntitySchema must define x.')
        }
          if (typeof schemaConfig.y === 'undefined') {
            throw new Error('EntitySchema must define y.')
        }
        */

    };var protocol = new Protocol(schemaConfig, config, null, components, true);
    protocol.type = 'Component';

    return protocol;
}

module.exports = ComponentProtocol;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var BitBuffer = __webpack_require__(7);
var BitStream = __webpack_require__(8);

var readBatches = __webpack_require__(65);
var readSingleProps = __webpack_require__(67);
var readCreateEntities = __webpack_require__(69);
var readDeleteEntities = __webpack_require__(70);

var readLocalEvents = __webpack_require__(71);
var readMessages = __webpack_require__(72);
var readJSONs = __webpack_require__(73);

var readTimesync = __webpack_require__(75);

var readPing = __webpack_require__(76);

var readTransfer = __webpack_require__(77);

var readConnectionResponse = __webpack_require__(78);

var readEngineMessages = __webpack_require__(79);

//var config = require('../../../config')

var Chunk = __webpack_require__(4).Chunk;
var ChunkReverse = __webpack_require__(4).ChunkReverse;
/*
function simplifySnapshot(rawSnapshot, entityCache) {
    var snapshot = {
        tick: 0,
        timestamp: Date.now(),
        localEvents: [],
        messages: [],
        jsons: [],
        createEntities: [],
        deleteEntities: [],
        updateEntities: []
    }

    snapshot.localEvents = rawSnapshot.localEvents
    snapshot.messages = rawSnapshot.messages
    snapshot.jsons = rawSnapshot.jsons
    snapshot.createEntities = rawSnapshot.createEntities
    snapshot.deleteEntities = rawSnapshot.deleteEntities

    // flatten all of the varying types of updates to one syntax:
    // { id: <entityId>, prop: <propToUpdate>, value: <newPropValue> }
    rawSnapshot.updateEntities.partial.forEach(singleProp => {
        snapshot.updateEntities.push(singleProp)
    })

    rawSnapshot.updateEntities.optimized.forEach(batch => {
        var entity = entityCache.getEntity(batch.id)
        batch.updates.forEach(update => {
            snapshot.updateEntities.push({
                id: batch.id,
                prop: update.prop,
                value: entity[update.prop]
            })
        })
    })
    return snapshot
}
*/

function readSnapshotBuffer(arrayBuffer, protocols, entityCache, config, connectCallback, transferCallback) {
    var bitBuffer = new BitBuffer(arrayBuffer);
    var bitStream = new BitStream(bitBuffer);

    //console.log(bitStream)

    var snapshot = {
        tick: 0,
        clientTick: -1,

        timestamp: -1,
        pingKey: -1,
        avgLatency: -1,

        engineMessages: [],

        // a copy of all visible events
        localMessages: [],

        // a copy of all messages
        messages: [],

        jsons: [],

        // a copy of all visible entities
        createEntities: [],

        // ids of entites no longer relevant to client
        deleteEntities: [],

        // updates to individual entities, using varying optimizations
        updateEntities: {
            // not used
            full: [],
            // per-property updates
            partial: [],
            // microOptimizations
            optimized: []
        },

        createComponents: [],
        deleteComponents: [],

        updateComponents: {
            // not used
            full: [],
            // per-property updates
            partial: [],
            // microOptimizations
            optimized: []
        }

        //var timestamp = bitStream.readFloat64()
        //console.log(Date.now() - timestamp)
        //snapshot.timestamp = timestamp
        //snapshot.clientTick = bitStream.readUInt32()

        //console.log('+==================================+')
    };while (bitStream.offset + 16 <= bitBuffer.bitLength) {
        //console.log('while', bitStream.offset, bitBuffer.bitLength)
        var msgType = bitStream.readUInt8();
        //console.log(msgType, ChunkReverse[msgType])

        switch (msgType) {
            case Chunk.Engine:
                var engineMessages = readEngineMessages(bitStream, protocols, config);
                snapshot.engineMessages = engineMessages;
                break;
            case Chunk.ClientTick:
                snapshot.clientTick = bitStream.readUInt32();
                break;
            case Chunk.Ping:
                var pingKey = readPing(bitStream);
                snapshot.pingKey = pingKey;
                break;
            case Chunk.Timesync:
                var times = readTimesync(bitStream);
                //console.log('READ Timesync', times)
                snapshot.timestamp = times.time;
                snapshot.avgLatency = times.avgLatency;
                break;

            case Chunk.CreateEntities:
                var entities = readMessages(bitStream, protocols, config);
                //console.log('READ ENTITIES', entities)
                snapshot.createEntities = entities;
                break;
            case Chunk.UpdateEntitiesPartial:
                var singleProps = readSingleProps(bitStream, entityCache, config);
                //console.log('SINGLE PROPS', singleProps)
                snapshot.updateEntities.partial = singleProps;
                break;
            case Chunk.UpdateEntitiesOptimized:
                var batches = readBatches(bitStream, entityCache);
                //console.log('BATCHES', batches)
                snapshot.updateEntities.optimized = batches;
                break;
            case Chunk.DeleteEntities:
                var deleteEntities = readDeleteEntities(bitStream, config);
                //console.log('DeleteEntities', deleteEntities)
                snapshot.deleteEntities = deleteEntities;
                break;

            case Chunk.CreateComponents:
                var entities = readMessages(bitStream, protocols, config);
                //console.log('READ ENTITIES', entities)
                snapshot.createComponents = entities;
                break;
            case Chunk.UpdateComponentsPartial:
                var singleProps = readSingleProps(bitStream, entityCache, config);
                //console.log('SINGLE PROPS', singleProps)
                snapshot.updateComponents.partial = singleProps;
                break;
            case Chunk.DeleteComponents:
                var deleteEntities = readDeleteEntities(bitStream, config);
                //console.log('DeleteEntities', deleteEntities)
                snapshot.deleteComponents = deleteEntities;
                break;

            case Chunk.LocalEvents:
                //console.log('prot', protocols)
                var localEvents = readMessages(bitStream, protocols, config);
                snapshot.localMessages = localEvents;
                break;
            case Chunk.Messages:
                var messages = readMessages(bitStream, protocols, config);
                snapshot.messages = messages;
                break;
            case Chunk.JSONs:
                var jsons = readJSONs(bitStream);
                snapshot.jsons = jsons;
                break;
            case Chunk.TransferClient:
                var transfer = readTransfer(bitStream);
                //console.log('TRANSFER', transfer)
                transferCallback(transfer.transferKey, transfer.address);
                break;
            case Chunk.ConnectionResponse:
                var response = readConnectionResponse(bitStream);
                connectCallback(response);
                return; // exit this code! not a normal snapshot
            default:
                break;
        }
    }
    //console.log('ss',snapshot)
    entityCache.saveSnapshot(snapshot);

    return snapshot; //simplifySnapshot(snapshot, entityCache)

}

module.exports = readSnapshotBuffer;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(62)
var ieee754 = __webpack_require__(63)
var isArray = __webpack_require__(64)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = ((uint8[i] << 16) & 0xFF0000) + ((uint8[i + 1] << 8) & 0xFF00) + (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readBatch = __webpack_require__(66);

function readBatches(bitStream, entityCache) {
    var length = bitStream[Binary[BinaryType.UInt16].read]();

    var batches = [];
    for (var i = 0; i < length; i++) {
        var batch = readBatch(bitStream, entityCache);
        batches.push(batch);
    }
    return batches;
}

module.exports = readBatches;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
//var config = require('../../../config')

function readBatch(bitStream, entityCache, config) {
    var batch = {};

    var id = bitStream[Binary[config.ID_BINARY_TYPE].read]();
    var schema = entityCache.getEntity(id).protocol;

    batch.id = id;
    batch.updates = [];

    schema.batch.keys.forEach(prop => {
        var propData = schema.batch.properties[prop];
        var value = bitStream[Binary[propData.type].read]();
        batch.updates.push({
            isDelta: propData.delta,
            prop: prop,
            path: propData.path,
            value: value
        });
    });

    return batch;
}

module.exports = readBatch;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readSingle = __webpack_require__(68);
//var config = require('../../../config')

function readSingleProps(bitStream, entityCache, config) {

    // number of singleProps
    var length = bitStream[Binary[BinaryType.UInt16].read]();

    var singleProps = [];
    for (var i = 0; i < length; i++) {
        // TODO is config needed here?
        var singleProp = readSingle(bitStream, entityCache, config);
        singleProps.push(singleProp);
    }
    return singleProps;
}

module.exports = readSingleProps;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
//var config = require('../../../config')
var readProp = __webpack_require__(18);

function readSingle(bitStream, entityCache, config) {
    var id = bitStream[Binary[config.ID_BINARY_TYPE].read]();
    var protocol = entityCache.getEntity(id).protocol;
    var propKey = bitStream[Binary[protocol.keyType].read]();
    var prop = protocol.keys[propKey];
    var propData = protocol.properties[prop];
    var value = readProp(bitStream, propData.type, propData.arrayIndexType); //bitStream[Binary[propData.type].read]()

    return {
        id: id,
        prop: prop,
        path: propData.path,
        value: value
    };
}

module.exports = readSingle;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readMessage = __webpack_require__(9);
//var config = require('../../../config')

function readCreateEntities(bitStream, protocols, config) {
    // number of entities
    var length = bitStream[Binary[BinaryType.UInt16].read]();

    var entities = [];
    for (var i = 0; i < length; i++) {
        var type = bitStream[Binary[config.TYPE_BINARY_TYPE].read]();
        var protocol = protocols.getProtocol(type);
        var entity = readMessage(bitStream, protocol, 1, type, config.TYPE_PROPERTY_NAME);
        entity.protocol = protocol;
        entities.push(entity);
    }
    return entities;
}

module.exports = readCreateEntities;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Chunk = __webpack_require__(4).Chunk;
var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

//var config = require('../../../config')

function readDeleteEntities(bitStream, config) {
    var ids = [];

    var length = bitStream[Binary[BinaryType.UInt16].read]();
    for (var i = 0; i < length; i++) {
        var id = bitStream[Binary[config.ID_BINARY_TYPE].read]();
        ids.push(id);
    }

    return ids;
}

module.exports = readDeleteEntities;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readMessage = __webpack_require__(9);
//var config = require('../../../config')

function readLocalEvents(bitStream, protocols, config) {
    // number of events
    var length = bitStream[Binary[BinaryType.UInt8].read]();

    var events = [];
    for (var i = 0; i < length; i++) {
        var type = bitStream[Binary[config.TYPE_BINARY_TYPE].read]();
        var protocol = protocols.getProtocol(type);
        var event = readMessage(bitStream, protocol, 1, type, config.TYPE_PROPERTY_NAME);
        event.protocol = protocol;
        events.push(event);
    }
    return events;
}

module.exports = readLocalEvents;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readMessage = __webpack_require__(9);
//var config = require('../../../config')

function readMessages(bitStream, protocols, config) {
    // number of messages
    var length = bitStream[Binary[BinaryType.UInt16].read]();

    var messages = [];
    for (var i = 0; i < length; i++) {

        var type = bitStream[Binary[config.TYPE_BINARY_TYPE].read]();
        var protocol = protocols.getProtocol(type);
        var message = readMessage(bitStream, protocol, 1, type, config.TYPE_PROPERTY_NAME);
        message.protocol = protocol;
        messages.push(message);
        //console.log('read message', message)
    }
    return messages;
}

module.exports = readMessages;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readJSON = __webpack_require__(74);

function readJSONs(bitStream) {
    var length = bitStream[Binary[BinaryType.UInt16].read]();
    var jsons = [];
    for (var i = 0; i < length; i++) {
        var json = readJSON(bitStream);
        jsons.push(json);
    }
    return jsons;
}

module.exports = readJSONs;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var utf8 = __webpack_require__(13);

var readJSON = function (bitStream) {
    var length = bitStream.readUInt32();
    var encoded = '';
    for (var i = 0; i < length; i++) {
        encoded += String.fromCharCode(bitStream.readUInt8());
    }
    return utf8.decode(encoded);
};

module.exports = readJSON;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function readTimesync(bitStream) {
    return {
        time: bitStream[Binary[BinaryType.Float64].read](),
        avgLatency: bitStream[Binary[BinaryType.UInt9].read]()
    };
}

module.exports = readTimesync;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function readPing(bitStream) {
   return bitStream[Binary[BinaryType.UInt8].read]();
}

module.exports = readPing;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function readTransfer(bitStream) {
	return {
		transferKey: Binary[BinaryType.UTF8String].read(bitStream),
		address: Binary[BinaryType.UTF8String].read(bitStream)
	};
}

module.exports = readTransfer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function readConnectionResponse(bitStream) {
	return {
		accepted: bitStream.readBoolean(),
		text: Binary[BinaryType.UTF8String].read(bitStream)
	};
}

module.exports = readConnectionResponse;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var readMessage = __webpack_require__(9);
//var config = require('../../../config')

function readEngineMessages(bitStream, protocols, config) {
    // number of messages
    var length = bitStream[Binary[BinaryType.UInt16].read]();

    var messages = [];
    for (var i = 0; i < length; i++) {

        var type = bitStream[Binary[config.TYPE_BINARY_TYPE].read]();
        var protocol = protocols.getMetaProtocol(type);
        var message = readMessage(bitStream, protocol, 1, type, config.TYPE_PROPERTY_NAME);
        message.protocol = protocol;
        messages.push(message);
        //console.log('read message', message)
    }
    return messages;
}

module.exports = readEngineMessages;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var BitBuffer = __webpack_require__(7);
var BitStream = __webpack_require__(8);
var Chunk = __webpack_require__(4).Chunk;

var countCommandsBits = __webpack_require__(81);
var writeCommands = __webpack_require__(84);

function createCommandBuffer(tick, commands) {
    var bits = 0;
    bits += 8;
    bits += 32;
    bits += countCommandsBits(commands);

    var bitBuffer = new BitBuffer(bits);
    var bitStream = new BitStream(bitBuffer);

    bitStream.writeUInt8(Chunk.ClientTick);
    bitStream.writeUInt32(tick);
    writeCommands(bitStream, commands);

    return bitBuffer;
}

module.exports = createCommandBuffer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var countMessageBits = __webpack_require__(82);

function countCommandsBits(commands) {
    var bits = 0;

    bits += Binary[BinaryType.UInt8].bits;
    bits += Binary[BinaryType.UInt16].bits;
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        bits += countMessageBits(command, command.protocol);
    }

    return bits;
}

module.exports = countCommandsBits;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var countPropBits = __webpack_require__(83);

function countMessageBits(proxy, protocol, initialPosition) {
    if (!protocol) {
        throw new Error('Protocol error: nengi encountered a Message without a protocol (did you mean to try to send this object? did you remember to add its protocol to the config?). Data:' + JSON.stringify(proxy));
    }
    var start = initialPosition || 0;
    var bits = 0;
    for (var i = 0; i < protocol.keys.length; i++) {
        var propName = protocol.keys[i];
        var propData = protocol.properties[propName];
        var value = proxy[propName];

        if (propData.protocol && propData.isArray) {
            // array of nengi objects
            var arrayIndexBinaryMeta = Binary[propData.arrayIndexType];
            bits += arrayIndexBinaryMeta.bits;
            for (var j = 0; j < value.length; j++) {
                bits += countMessageBits(value[j], propData.protocol);
            }
        } else if (propData.protocol) {
            // a single nengi object
            bits += countMessageBits(value, propData.protocol);
        } else if (propData.isArray) {
            // array of nengi values
            var arrayIndexBinaryMeta = Binary[propData.arrayIndexType];
            bits += arrayIndexBinaryMeta.bits;
            for (var j = 0; j < value.length; j++) {
                bits += countPropBits(propData.type, propData.arrayIndexType, value[j]);
            }
        } else {
            // a single nengi value
            bits += countPropBits(propData.type, propData.arrayIndexType, value);
        }
    }
    return bits;
}

module.exports = countMessageBits;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var BinaryType = __webpack_require__(1);

module.exports = function (type, arrayIndexType, value) {
    //console.log('type', type, 'arrayIndexType', arrayIndexType, 'value', value)
    var bits = 0;
    var binaryMeta = Binary[type];

    if (binaryMeta.countBits) {
        bits = binaryMeta.countBits(value);
    } else {
        bits = binaryMeta.bits;
    }

    return bits;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Chunk = __webpack_require__(4).Chunk;
var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);
var writeMessage = __webpack_require__(85);

function writeCommands(bitStream, commands) {

    // note: it is possible to write 0 commands
    // in which case the chunktype and 0 are still sent

    // ChunkType Commands
    bitStream[Binary[BinaryType.UInt8].write](Chunk.Commands);

    // number of Commands
    bitStream[Binary[BinaryType.UInt16].write](commands.length);

    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        writeMessage(bitStream, command, command.protocol);
    }
}

module.exports = writeCommands;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var writeProp = __webpack_require__(86);
var getValue = __webpack_require__(6);

var writeMessage = function (bitStream, proxy, protocol, initialPosition) {

    //console.log('writing message', proxy, protocol)
    var start = initialPosition || 0;
    for (var i = 0; i < protocol.keys.length; i++) {
        var propName = protocol.keys[i];
        var propData = protocol.properties[propName];
        var value = getValue(proxy, propData.path); //proxy[propName]

        if (propData.protocol && propData.isArray) {
            //console.log('writing array of sub protocol')
            var arrayIndexBinaryMeta = Binary[propData.arrayIndexType];
            bitStream[arrayIndexBinaryMeta.write](value.length);
            for (var j = 0; j < value.length; j++) {
                writeMessage(bitStream, value[j], propData.protocol);
            }
        } else if (propData.protocol) {
            //console.log('writing sub protocol')
            writeMessage(bitStream, value, propData.protocol);
        } else if (propData.isArray) {
            //console.log('writing array')
            var arrayIndexBinaryMeta = Binary[propData.arrayIndexType];
            bitStream[arrayIndexBinaryMeta.write](value.length);
            for (var j = 0; j < value.length; j++) {
                writeProp(bitStream, propData.type, propData.arrayIndexType, value[j]);
            }
        } else {
            //console.log('writing regular prop', value)
            writeProp(bitStream, propData.type, propData.arrayIndexType, value);
        }
    }
};

module.exports = writeMessage;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var Binary = __webpack_require__(0);
var BinaryType = __webpack_require__(1);

var writeProp = function (bitStream, type, arrayIndexType, value) {
    var binaryMeta = Binary[type];

    if (binaryMeta.customWrite) {
        binaryMeta.write(bitStream, value);
    } else {
        bitStream[binaryMeta.write](value);
    }
};

module.exports = writeProp;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var BitBuffer = __webpack_require__(7);
var BitStream = __webpack_require__(8);
var Chunk = __webpack_require__(4).Chunk;

var countPongBits = __webpack_require__(88);
var writePong = __webpack_require__(89);

function createPongBuffer(pongKey) {
    var bits = 0;
    bits += 8;
    bits += 8;

    var bitBuffer = new BitBuffer(bits);
    var bitStream = new BitStream(bitBuffer);

    bitStream.writeUInt8(Chunk.Pong);
    bitStream.writeUInt8(pongKey);

    return bitBuffer;
}

module.exports = createPongBuffer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function countPongBits(key) {
    var bits = 0;
    if (key > -1) {
        bits += Binary[BinaryType.UInt8].bits;
        bits += Binary[BinaryType.UInt8].bits;
    }
    return bits;
}

module.exports = countPongBits;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Chunk = __webpack_require__(4).Chunk;
var BinaryType = __webpack_require__(1);
var Binary = __webpack_require__(0);

function writePong(bitStream, key) {
    if (key > -1) {
        bitStream[Binary[BinaryType.UInt8].write](Chunk.Pong);
        bitStream[Binary[BinaryType.UInt8].write](key);
    }
}

module.exports = writePong;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var BitBuffer = __webpack_require__(7);
var BitStream = __webpack_require__(8);
var Binary = __webpack_require__(0);
var BinaryType = __webpack_require__(1);
var Chunk = __webpack_require__(4).Chunk;

function createHandshakeBuffer(handshake) {
    var json = JSON.stringify(handshake);

    var bits = 8;
    bits += Binary[BinaryType.UTF8String].countBits(json);

    var bitBuffer = new BitBuffer(bits);
    var bitStream = new BitStream(bitBuffer);

    bitStream.writeUInt8(Chunk.Handshake);
    Binary[BinaryType.UTF8String].write(bitStream, json);

    return bitBuffer;
}

module.exports = createHandshakeBuffer;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getValue = __webpack_require__(6);
var setValue = __webpack_require__(10);

var proxify = function (obj, protocol) {

	//console.log(obj, protocol)
	var proxy = {};

	for (var i = 0; i < protocol.keys.length; i++) {
		//var value
		var prop = protocol.properties[protocol.keys[i]];
		var value = getValue(obj, prop.path);

		if (prop.isArray) {
			//console.log(prop.path, 'ARRAY_BASEd')

			if (prop.protocol) {
				// array of object references
				var temp = [];
				for (var j = 0; j < value.length; j++) {
					temp.push(proxify(value[j], prop.protocol));
				}
				value = temp;
			} else {
				// array of simple values
				var temp = [];
				for (var j = 0; j < value.length; j++) {
					temp.push(value[j]);
				}
				value = temp;
			}
		} else {
			//console.log(prop.path, 'sub object NOT in array')
			if (typeof prop.protocol !== 'undefined') {
				if (prop.protocol !== null) {
					value = proxify(value, prop.protocol);
					//console.log('.:', value)
				}
			}
		}

		if (typeof value === 'undefined') {
			value = 0;
		}

		//console.log('r.:', value)
		setValue(proxy, prop.path, value);

		//console.log('SETTT', protocol.keys[i], value)
		//proxy[protocol.keys[i]] = value
	}
	//console.log('returning proxy', proxy)
	return proxy;
};

module.exports = proxify;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var EDictionary = __webpack_require__(93);
var copyProxy = __webpack_require__(20);
var getValue = __webpack_require__(6);
var setValue = __webpack_require__(10);

function WorldState(tick, timeBetweenSnapshots, snapshot, previousWorldState) {
    this.timeBetweenSnapshots = timeBetweenSnapshots;
    this.tick = tick;
    this.clientTick = snapshot.clientTick;
    this.raw = snapshot;
    this.processed = false;

    this.timestamp = snapshot.timestamp;
    // entity state
    this.entities = new EDictionary();
    this.components = new EDictionary();

    this.noInterps = [];

    this.createEntities = [];
    this.updateEntities = [];
    this.deleteEntities = [];

    // (ids) created this snapshot
    //this.createdEntityIds = []
    // (ids) deleted this snapshot
    //this.deletedEntityIds = []
    // (ids) updates this snapshot
    //this.updatedEntityIds = []

    this.createComponents = [];
    this.updateComponents = [];
    this.deleteComponents = [];

    // (ids) created this snapshot
    //this.createdComponentIds = []
    // (ids) deleted this snapshot
    // this.deletedComponentIds = []
    // (ids) updates this snapshot
    // this.updatedComponentIds = []

    // localMessage state
    this.localMessages = [];
    // message state
    this.messages = [];
    // jsons
    this.jsons = [];

    this.ping = -1;
    //this.temporalOffset = -1

    this.init(snapshot, previousWorldState);
}

WorldState.prototype.init = function (snapshot, previousWorldState) {
    if (previousWorldState) {
        if (this.timestamp === -1) {
            this.timestamp = previousWorldState.timestamp + this.timeBetweenSnapshots;
        }

        previousWorldState.entities.forEach(entity => {
            var clone = copyProxy(entity, entity.protocol);
            clone.protocol = entity.protocol;
            this.entities.add(clone);
        });

        previousWorldState.components.forEach(c => {
            var clone = copyProxy(c, c.protocol);
            clone.protocol = c.protocol;
            this.components.add(clone);
        });
    }

    snapshot.engineMessages.forEach(message => {
        this.noInterps = message.ids;
    });

    snapshot.createEntities.forEach(entity => {
        //this.createdEntityIds.push(entity.id)
        var clone = copyProxy(entity, entity.protocol);
        clone.protocol = entity.protocol;
        this.entities.add(clone);
        this.createEntities.push(clone);
    });

    snapshot.createComponents.forEach(c => {
        //this.createdComponentIds.push(c.id)
        var clone = copyProxy(c, c.protocol);
        clone.protocol = c.protocol;
        this.components.add(clone);
        this.createComponents.push(clone);
    });

    snapshot.localMessages.forEach(localMessage => {
        var clone = copyProxy(localMessage, localMessage.protocol);
        clone.protocol = localMessage.protocol;
        this.localMessages.push(clone);
    });

    snapshot.messages.forEach(message => {
        var clone = copyProxy(message, message.protocol);
        clone.protocol = message.protocol;
        this.messages.push(clone);
    });

    snapshot.jsons.forEach(json => {
        this.jsons.push(JSON.parse(json));
    });

    snapshot.updateEntities.partial.forEach(singleProp => {
        //this.updatedEntityIds.push(singleProp.id)

        var entity = this.entities.get(singleProp.id);
        //entity[singleProp.prop] = singleProp.value
        setValue(entity, singleProp.path, singleProp.value);

        this.updateEntities.push({
            id: singleProp.id,
            prop: singleProp.prop,
            path: singleProp.path,
            value: singleProp.value
        });
    });

    snapshot.updateEntities.optimized.forEach(batch => {
        //this.updatedEntityIds.push(batch.id)

        var entity = this.entities.get(batch.id);
        batch.updates.forEach(update => {
            if (update.isDelta) {
                var value = getValue(entity, update.path);
                setValue(entity, update.path, value + update.value);
                //entity[update.prop] += update.value
            } else {
                setValue(entity, update.path, update.value);
                //entity[update.prop] = update.value
            }

            this.updateEntities.push({
                id: batch.id,
                prop: update.prop,
                path: update.path,
                value: entity[update.prop]
            });
        });
    });

    snapshot.deleteEntities.forEach(id => {
        //this.deletedEntityIds.push(id)
        this.deleteEntities.push(id);
        /*
        let entity = this.entities.get(id)
        if (entity.components) {
            entity.components.forEach(c => {
                this.deletedComponentIds.push(c.id)
                this.deleteComponents.push(c.id)
                this.components.removeById(c.id)
            })
        }
        */
        this.entities.removeById(id);
    });

    snapshot.updateComponents.partial.forEach(singleProp => {
        //this.updatedComponentIds.push(singleProp.id)

        var c = this.components.get(singleProp.id);
        setValue(c, singleProp.path, singleProp.value);

        this.updateComponents.push({
            id: singleProp.id,
            prop: singleProp.prop,
            path: singleProp.path,
            value: singleProp.value
        });
    });

    snapshot.deleteComponents.forEach(id => {
        //this.deletedComponentIds.push(id)
        this.deleteComponents.push(id);
        this.components.removeById(id);
    });
};

module.exports = WorldState;

/***/ }),
/* 93 */
/***/ (function(module, exports) {


function EDictionary() {
    this.object = {};
    this.array = [];
}

EDictionary.prototype.get = function (id) {
    var obj = this.object[id];
    if (typeof obj !== 'undefined') {
        return this.object[id];
    }
    return null;
};

EDictionary.prototype.forEach = function (iterator) {
    for (var i = 0; i < this.array.length; i++) {
        iterator(this.array[i]);
    }
};

// a copy of the underlying array
EDictionary.prototype.toArray = function () {
    return this.array.slice();
};

EDictionary.prototype.add = function (obj) {
    if (typeof obj === 'object' && typeof obj.id !== 'undefined') {
        this.object[obj.id] = obj;
        this.array.push(obj);
    } else {
        throw new Error('EDictionary could not add object, invalid object or object.id.');
    }
};

EDictionary.prototype.remove = function (obj) {
    if (typeof obj === 'object' && typeof obj.id !== 'undefined') {
        return this.removeById(obj.id);
    } else {
        //throw new Error('EDictionary could not remove object, invalid object or object.id.')
    }
};

EDictionary.prototype.removeById = function (id) {
    if (typeof id !== 'undefined') {
        var index = -1;
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.array.splice(index, 1);
        } else {
            //throw new Error('EDictionary could not remove object, id not found.')
        }
        var temp = this.object[id];
        delete this.object[id];
        return temp;
    } else {
        //throw new Error('EDictionary could not removeById, invalid id.')
    }
};

// TODO: bulkRemove([]), bulkRemoveById([])

module.exports = EDictionary;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

const NoInterpsMessage = __webpack_require__(95);

module.exports = {
    messages: [['NoInterps', NoInterpsMessage.protocol, 66]]
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var B = __webpack_require__(1);

class NoInterpsMessage {
    constructor(ids) {
        this.type = 66;
        this.ids = ids;
    }
}

NoInterpsMessage.protocol = {
    ids: { type: B.UInt32, indexType: B.UInt32 }
};

module.exports = NoInterpsMessage;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

const EntityCache = __webpack_require__(19);
const getValue = __webpack_require__(6);
const Binary = __webpack_require__(0);

const findInitialSnapshot = function (snapshots, renderTime) {
    for (var i = snapshots.length - 1; i >= 0; i--) {
        var snapshot = snapshots[i];
        if (snapshot.timestamp < renderTime) {
            return { snapshot: snapshot, index: i };
        }
    }
};

const lerp = function (a, b, portion) {
    return a + (b - a) * portion;
};

class Interpolator {
    constructor(interpDelay) {
        this.cache = new EntityCache();
        this.interpDelay = interpDelay;
        this.lastProcessedTick = -1;
    }

    interpolate(snapshots, tickLength, avgDiff) {
        var renderTime = Date.now() - this.interpDelay - avgDiff;

        var late = [];

        var snapshotOlderIndex = null;
        var snapshotNewer = null;
        var snapshotOlder = null;

        var initialSnapshotData = findInitialSnapshot(snapshots, renderTime);

        if (initialSnapshotData) {
            snapshotOlder = initialSnapshotData.snapshot;
            snapshotOlderIndex = initialSnapshotData.index;
        }

        if (snapshotOlder) {
            var olderTick = snapshotOlder.tick;
            for (var i = 0; i < snapshots.length; i++) {
                var tempSnapshot = snapshots[i];
                if (tempSnapshot.tick === olderTick + 1) {
                    snapshotNewer = tempSnapshot;
                }
            }

            var iSnapshot = {
                createEntities: [],
                deleteEntities: [],
                updateEntities: [],
                createComponents: [],
                deleteComponents: [],
                updateComponents: [],
                tick: null
            };

            if (snapshotOlder.tick - 1 > this.lastProcessedTick) {
                for (var i = snapshots.length - 1; i > -1; i--) {
                    var ss = snapshots[i];
                    if (ss.tick < snapshotOlder.tick && !ss.processed) {
                        late.push(ss);
                        ss.processed = true;
                        snapshots.splice(i, 1);
                    }
                }
            }

            late.reverse();

            if (!snapshotOlder.processed) {
                iSnapshot.timestamp = snapshotOlder.timestamp;
                iSnapshot.createEntities = iSnapshot.createEntities.concat(snapshotOlder.createEntities);
                iSnapshot.deleteEntities = iSnapshot.deleteEntities.concat(snapshotOlder.deleteEntities);
                iSnapshot.createComponents = iSnapshot.createComponents.concat(snapshotOlder.createComponents);
                iSnapshot.deleteComponents = iSnapshot.deleteComponents.concat(snapshotOlder.deleteComponents);
                iSnapshot.updateEntities = iSnapshot.updateEntities.concat(snapshotOlder.updateEntities);
                snapshotOlder.processed = true;
                iSnapshot.tick = snapshotOlder.tick;
                this.lastProcessedTick = snapshotOlder.tick;

                for (var i = 0; i < iSnapshot.createEntities.length; i++) {
                    this.cache.saveEntity(iSnapshot.createEntities[i], iSnapshot.createEntities[i].protocol);
                }

                for (var i = 0; i < iSnapshot.deleteEntities.length; i++) {
                    this.cache.deleteEntity(iSnapshot.deleteEntities[i]);
                }

                for (var i = 0; i < iSnapshot.createComponents.length; i++) {
                    this.cache.saveEntity(iSnapshot.createComponents[i], iSnapshot.createComponents[i].protocol);
                }

                for (var i = 0; i < iSnapshot.updateEntities.length; i++) {
                    this.cache.updateEntityPartial(iSnapshot.updateEntities[i].id, iSnapshot.updateEntities[i].path, iSnapshot.updateEntities[i].value);
                }
            }
        }

        if (snapshotNewer && snapshotOlder) {
            if (snapshotOlder.tick >= this.lastProcessedTick) {
                var total = tickLength;
                var portion = renderTime - snapshotOlder.timestamp;
                var ratio = portion / total;

                iSnapshot.timestamp = lerp(snapshotOlder.timestamp, snapshotNewer.timestamp, ratio);

                var ids = [];

                for (var i = 0; i < snapshotNewer.updateEntities.length; i++) {
                    var update = snapshotNewer.updateEntities[i];
                    ids.push(update.id);

                    var prop = update.prop;
                    var entityOlder = snapshotOlder.entities.get(update.id);
                    var propData = entityOlder.protocol.properties[prop];
                    var binaryType = Binary[propData.type];

                    if (propData.interp && snapshotNewer.noInterps.indexOf(update.id) === -1) {
                        var entityNewer = snapshotNewer.entities.get(update.id);
                        var valueOlder = getValue(entityOlder, propData.path);
                        var valueNewer = getValue(entityNewer, propData.path);

                        var valueInterp = valueOlder;

                        if (typeof binaryType.interp === 'function') {
                            valueInterp = binaryType.interp(valueOlder, valueNewer, ratio);
                        } else {
                            valueInterp = lerp(valueOlder, valueNewer, ratio);
                        }

                        if (valueInterp !== getValue(this.cache.getEntity(update.id), propData.path)) {
                            iSnapshot.updateEntities.push({
                                id: update.id,
                                prop: prop,
                                path: propData.path,
                                value: valueInterp
                            });
                        }
                    } else {
                        if (update.value !== getValue(this.cache.getEntity(update.id), update.path)) {
                            iSnapshot.updateEntities.push(update);
                        }
                    }
                }

                for (var i = 0; i < snapshotOlder.updateEntities.length; i++) {
                    var update = snapshotOlder.updateEntities[i];

                    if (ids.indexOf(update.id) === -1) {
                        if (update.value !== getValue(this.cache.getEntity(update.id), update.path)) {
                            iSnapshot.updateEntities.push(update);
                        }
                    }
                }

                ids = [];

                for (var i = 0; i < snapshotNewer.updateComponents.length; i++) {
                    var update = snapshotNewer.updateComponents[i];
                    ids.push(update.id);
                    var entityOlder = snapshotOlder.components.get(update.id);
                    var prop = update.prop;
                    var propData = entityOlder.protocol.properties[prop];

                    var binaryType = Binary[propData.type];

                    if (propData.interp && snapshotNewer.noInterps.indexOf(update.id) === -1) {
                        var entityNewer = snapshotNewer.components.get(update.id);
                        var valueOlder = getValue(entityOlder, propData.path);
                        var valueNewer = getValue(entityNewer, propData.path);

                        var valueInterp = valueOlder;

                        if (typeof binaryType.interp === 'function') {
                            valueInterp = binaryType.interp(valueOlder, valueNewer, ratio);
                        } else {
                            valueInterp = lerp(valueOlder, valueNewer, ratio);
                        }

                        if (valueInterp !== getValue(this.cache.getEntity(update.id), propData.path)) {
                            iSnapshot.updateComponents.push({
                                id: update.id,
                                prop: prop,
                                path: propData.path,
                                value: valueInterp
                            });
                        }
                    } else {
                        if (update.value !== getValue(this.cache.getEntity(update.id), update.path)) {
                            iSnapshot.updateComponents.push(update);
                        }
                    }
                }

                for (var i = 0; i < snapshotOlder.updateComponents.length; i++) {
                    var update = snapshotOlder.updateComponents[i];

                    if (ids.indexOf(update.id) === -1) {
                        if (update.value !== getValue(this.cache.getEntity(update.id), update.path)) {
                            iSnapshot.updateComponents.push(update);
                        }
                    }
                }
            }
        } else {
            // extrapolate?
        }

        if (iSnapshot) {
            for (var i = 0; i < iSnapshot.updateEntities.length; i++) {
                this.cache.updateEntityPartial(iSnapshot.updateEntities[i].id, iSnapshot.updateEntities[i].path, iSnapshot.updateEntities[i].value);
            }
            for (var i = 0; i < iSnapshot.updateComponents.length; i++) {
                this.cache.updateEntityPartial(iSnapshot.updateComponents[i].id, iSnapshot.updateComponents[i].path, iSnapshot.updateComponents[i].value);
            }
            for (var i = 0; i < iSnapshot.deleteComponents.length; i++) {
                this.cache.deleteEntity(iSnapshot.deleteComponents[i]);
            }
        }

        // add the interpolated snapshot to the end of all of the late snapshots
        if (iSnapshot) {
            late.push(iSnapshot);
        }

        return {
            entities: late,
            interpA: snapshotOlder,
            interpB: snapshotNewer
        };
    }
}

module.exports = Interpolator;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

var config = {
    // UPDATE_RATE of server logic, used by interp calculations
    UPDATE_RATE: 20,
    // DRAW_RATE is not currently used
    DRAW_RATE: 60,
    // range of ids, e.g. 0-65535, increase this if you can have more than 65535 objects at the same time
    ID_BINARY_TYPE: nengi.UInt16,
    // range of types, e.g. 0-255, increase this if you have more than 255 protocol definitions
    TYPE_BINARY_TYPE: nengi.UInt8,

    /* UNTESTED at anything other than the default values of 'id', 'parentId', and 'type' */
    // property name that stores the id on nengi objects
    ID_PROPERTY_NAME: 'id',
    // property name that stores the parent on components (if used)
    PARENT_ID_PROPERTY_NAME: 'parentId',
    // property name that stores the type on nengi objects
    TYPE_PROPERTY_NAME: 'type',

    protocols: {
        // example of using components
        /*
        entities: [
            { protocol: entityProtocol, type: 255, components: { mode: 'Map' } },
        ],
          components: Object.keys(ComponentIndex)
            .filter(key => ComponentIndex[key].hasOwnProperty('protocol'))
            .map(key => ({protocol: ComponentIndex[key].protocol, type: Component[key.toUpperCase()]})),
        */

        entities: [['PlayerCharacter', __webpack_require__(21)]],
        //components: [],
        localMessages: [],
        messages: [['Identity', __webpack_require__(100)], ['Allowed', __webpack_require__(101)], ['WeaponFired', __webpack_require__(102)]],
        commands: [['MoveCommand', __webpack_require__(22)], ['FireCommand', __webpack_require__(23)]],
        basics: []
    }
};

module.exports = config;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

class WeaponSystem {
    constructor() {
        this.onCooldown = false;
        this.cooldown = 0.5;
        this.acc = 0;
    }

    update(delta) {
        if (this.onCooldown) {
            this.acc += delta;
            if (this.acc >= this.cooldown) {
                this.acc = 0;
                this.onCooldown = false;
            }
        }
    }

    fire() {
        if (!this.onCooldown) {
            this.onCooldown = true;
            return true;
        }
        return false;
    }
}

module.exports = WeaponSystem;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Version 0.7.0 - Copyright 2012 - 2018 -  Jim Riecken <jimr@jimr.ca>
//
// Released under the MIT License - https://github.com/jriecken/sat-js
//
// A simple library for determining intersections of circles and
// polygons using the Separating Axis Theorem.
/** @preserve SAT.js - Version 0.7.0 - Copyright 2012 - 2018 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */

/*global define: false, module: false*/
/*jshint shadow:true, sub:true, forin:true, noarg:true, noempty:true,
  eqeqeq:true, bitwise:true, strict:true, undef:true,
  curly:true, browser:true */

// Create a UMD wrapper for SAT. Works in:
//
//  - Plain browser via global SAT variable
//  - AMD loader (like require.js)
//  - Node.js
//
// The quoted properties all over the place are used so that the Closure Compiler
// does not mangle the exposed API in advanced mode.
/**
 * @param {*} root - The global scope
 * @param {Function} factory - Factory that creates SAT module
 */
(function (root, factory) {
  "use strict";
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module['exports'] = factory();
  } else {
    root['SAT'] = factory();
  }
}(this, function () {
  "use strict";

  var SAT = {};

  //
  // ## Vector
  //
  // Represents a vector in two dimensions with `x` and `y` properties.


  // Create a new Vector, optionally passing in the `x` and `y` coordinates. If
  // a coordinate is not specified, it will be set to `0`
  /**
   * @param {?number=} x The x position.
   * @param {?number=} y The y position.
   * @constructor
   */
  function Vector(x, y) {
    this['x'] = x || 0;
    this['y'] = y || 0;
  }
  SAT['Vector'] = Vector;
  // Alias `Vector` as `V`
  SAT['V'] = Vector;


  // Copy the values of another Vector into this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['copy'] = Vector.prototype.copy = function(other) {
    this['x'] = other['x'];
    this['y'] = other['y'];
    return this;
  };

  // Create a new vector with the same coordinates as this on.
  /**
   * @return {Vector} The new cloned vector
   */
  Vector.prototype['clone'] = Vector.prototype.clone = function() {
    return new Vector(this['x'], this['y']);
  };

  // Change this vector to be perpendicular to what it was before. (Effectively
  // roatates it 90 degrees in a clockwise direction)
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['perp'] = Vector.prototype.perp = function() {
    var x = this['x'];
    this['x'] = this['y'];
    this['y'] = -x;
    return this;
  };

  // Rotate this vector (counter-clockwise) by the specified angle (in radians).
  /**
   * @param {number} angle The angle to rotate (in radians)
   * @return {Vector} This for chaining.
   */
  Vector.prototype['rotate'] = Vector.prototype.rotate = function (angle) {
    var x = this['x'];
    var y = this['y'];
    this['x'] = x * Math.cos(angle) - y * Math.sin(angle);
    this['y'] = x * Math.sin(angle) + y * Math.cos(angle);
    return this;
  };

  // Reverse this vector.
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reverse'] = Vector.prototype.reverse = function() {
    this['x'] = -this['x'];
    this['y'] = -this['y'];
    return this;
  };


  // Normalize this vector.  (make it have length of `1`)
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['normalize'] = Vector.prototype.normalize = function() {
    var d = this.len();
    if(d > 0) {
      this['x'] = this['x'] / d;
      this['y'] = this['y'] / d;
    }
    return this;
  };

  // Add another vector to this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['add'] = Vector.prototype.add = function(other) {
    this['x'] += other['x'];
    this['y'] += other['y'];
    return this;
  };

  // Subtract another vector from this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaiing.
   */
  Vector.prototype['sub'] = Vector.prototype.sub = function(other) {
    this['x'] -= other['x'];
    this['y'] -= other['y'];
    return this;
  };

  // Scale this vector. An independant scaling factor can be provided
  // for each axis, or a single scaling factor that will scale both `x` and `y`.
  /**
   * @param {number} x The scaling factor in the x direction.
   * @param {?number=} y The scaling factor in the y direction.  If this
   *   is not specified, the x scaling factor will be used.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['scale'] = Vector.prototype.scale = function(x,y) {
    this['x'] *= x;
    this['y'] *= y || x;
    return this;
  };

  // Project this vector on to another vector.
  /**
   * @param {Vector} other The vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['project'] = Vector.prototype.project = function(other) {
    var amt = this.dot(other) / other.len2();
    this['x'] = amt * other['x'];
    this['y'] = amt * other['y'];
    return this;
  };

  // Project this vector onto a vector of unit length. This is slightly more efficient
  // than `project` when dealing with unit vectors.
  /**
   * @param {Vector} other The unit vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['projectN'] = Vector.prototype.projectN = function(other) {
    var amt = this.dot(other);
    this['x'] = amt * other['x'];
    this['y'] = amt * other['y'];
    return this;
  };

  // Reflect this vector on an arbitrary axis.
  /**
   * @param {Vector} axis The vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reflect'] = Vector.prototype.reflect = function(axis) {
    var x = this['x'];
    var y = this['y'];
    this.project(axis).scale(2);
    this['x'] -= x;
    this['y'] -= y;
    return this;
  };

  // Reflect this vector on an arbitrary axis (represented by a unit vector). This is
  // slightly more efficient than `reflect` when dealing with an axis that is a unit vector.
  /**
   * @param {Vector} axis The unit vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reflectN'] = Vector.prototype.reflectN = function(axis) {
    var x = this['x'];
    var y = this['y'];
    this.projectN(axis).scale(2);
    this['x'] -= x;
    this['y'] -= y;
    return this;
  };

  // Get the dot product of this vector and another.
  /**
   * @param {Vector}  other The vector to dot this one against.
   * @return {number} The dot product.
   */
  Vector.prototype['dot'] = Vector.prototype.dot = function(other) {
    return this['x'] * other['x'] + this['y'] * other['y'];
  };

  // Get the squared length of this vector.
  /**
   * @return {number} The length^2 of this vector.
   */
  Vector.prototype['len2'] = Vector.prototype.len2 = function() {
    return this.dot(this);
  };

  // Get the length of this vector.
  /**
   * @return {number} The length of this vector.
   */
  Vector.prototype['len'] = Vector.prototype.len = function() {
    return Math.sqrt(this.len2());
  };

  // ## Circle
  //
  // Represents a circle with a position and a radius.

  // Create a new circle, optionally passing in a position and/or radius. If no position
  // is given, the circle will be at `(0,0)`. If no radius is provided, the circle will
  // have a radius of `0`.
  /**
   * @param {Vector=} pos A vector representing the position of the center of the circle
   * @param {?number=} r The radius of the circle
   * @constructor
   */
  function Circle(pos, r) {
    this['pos'] = pos || new Vector();
    this['r'] = r || 0;
  }
  SAT['Circle'] = Circle;

  // Compute the axis-aligned bounding box (AABB) of this Circle.
  //
  // Note: Returns a _new_ `Polygon` each time you call this.
  /**
   * @return {Polygon} The AABB
   */
  Circle.prototype['getAABB'] = Circle.prototype.getAABB = function() {
    var r = this['r'];
    var corner = this["pos"].clone().sub(new Vector(r, r));
    return new Box(corner, r*2, r*2).toPolygon();
  };

  // ## Polygon
  //
  // Represents a *convex* polygon with any number of points (specified in counter-clockwise order)
  //
  // Note: Do _not_ manually change the `points`, `angle`, or `offset` properties. Use the
  // provided setters. Otherwise the calculated properties will not be updated correctly.
  //
  // `pos` can be changed directly.

  // Create a new polygon, passing in a position vector, and an array of points (represented
  // by vectors relative to the position vector). If no position is passed in, the position
  // of the polygon will be `(0,0)`.
  /**
   * @param {Vector=} pos A vector representing the origin of the polygon. (all other
   *   points are relative to this one)
   * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
   *   in counter-clockwise order.
   * @constructor
   */
  function Polygon(pos, points) {
    this['pos'] = pos || new Vector();
    this['angle'] = 0;
    this['offset'] = new Vector();
    this.setPoints(points || []);
  }
  SAT['Polygon'] = Polygon;

  // Set the points of the polygon.
  //
  // Note: The points are counter-clockwise *with respect to the coordinate system*.
  // If you directly draw the points on a screen that has the origin at the top-left corner
  // it will _appear_ visually that the points are being specified clockwise. This is just
  // because of the inversion of the Y-axis when being displayed.
  /**
   * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
   *   in counter-clockwise order.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setPoints'] = Polygon.prototype.setPoints = function(points) {
    // Only re-allocate if this is a new polygon or the number of points has changed.
    var lengthChanged = !this['points'] || this['points'].length !== points.length;
    if (lengthChanged) {
      var i;
      var calcPoints = this['calcPoints'] = [];
      var edges = this['edges'] = [];
      var normals = this['normals'] = [];
      // Allocate the vector arrays for the calculated properties
      for (i = 0; i < points.length; i++) {
        calcPoints.push(new Vector());
        edges.push(new Vector());
        normals.push(new Vector());
      }
    }
    this['points'] = points;
    this._recalc();
    return this;
  };

  // Set the current rotation angle of the polygon.
  /**
   * @param {number} angle The current rotation angle (in radians).
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setAngle'] = Polygon.prototype.setAngle = function(angle) {
    this['angle'] = angle;
    this._recalc();
    return this;
  };

  // Set the current offset to apply to the `points` before applying the `angle` rotation.
  /**
   * @param {Vector} offset The new offset vector.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setOffset'] = Polygon.prototype.setOffset = function(offset) {
    this['offset'] = offset;
    this._recalc();
    return this;
  };

  // Rotates this polygon counter-clockwise around the origin of *its local coordinate system* (i.e. `pos`).
  //
  // Note: This changes the **original** points (so any `angle` will be applied on top of this rotation).
  /**
   * @param {number} angle The angle to rotate (in radians)
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['rotate'] = Polygon.prototype.rotate = function(angle) {
    var points = this['points'];
    var len = points.length;
    for (var i = 0; i < len; i++) {
      points[i].rotate(angle);
    }
    this._recalc();
    return this;
  };

  // Translates the points of this polygon by a specified amount relative to the origin of *its own coordinate
  // system* (i.e. `pos`).
  //
  // This is most useful to change the "center point" of a polygon. If you just want to move the whole polygon, change
  // the coordinates of `pos`.
  //
  // Note: This changes the **original** points (so any `offset` will be applied on top of this translation)
  /**
   * @param {number} x The horizontal amount to translate.
   * @param {number} y The vertical amount to translate.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['translate'] = Polygon.prototype.translate = function (x, y) {
    var points = this['points'];
    var len = points.length;
    for (var i = 0; i < len; i++) {
      points[i]["x"] += x;
      points[i]["y"] += y;
    }
    this._recalc();
    return this;
  };


  // Computes the calculated collision polygon. Applies the `angle` and `offset` to the original points then recalculates the
  // edges and normals of the collision polygon.
  /**
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype._recalc = function() {
    // Calculated points - this is what is used for underlying collisions and takes into account
    // the angle/offset set on the polygon.
    var calcPoints = this['calcPoints'];
    // The edges here are the direction of the `n`th edge of the polygon, relative to
    // the `n`th point. If you want to draw a given edge from the edge value, you must
    // first translate to the position of the starting point.
    var edges = this['edges'];
    // The normals here are the direction of the normal for the `n`th edge of the polygon, relative
    // to the position of the `n`th point. If you want to draw an edge normal, you must first
    // translate to the position of the starting point.
    var normals = this['normals'];
    // Copy the original points array and apply the offset/angle
    var points = this['points'];
    var offset = this['offset'];
    var angle = this['angle'];
    var len = points.length;
    var i;
    for (i = 0; i < len; i++) {
      var calcPoint = calcPoints[i].copy(points[i]);
      calcPoint["x"] += offset["x"];
      calcPoint["y"] += offset["y"];
      if (angle !== 0) {
        calcPoint.rotate(angle);
      }
    }
    // Calculate the edges/normals
    for (i = 0; i < len; i++) {
      var p1 = calcPoints[i];
      var p2 = i < len - 1 ? calcPoints[i + 1] : calcPoints[0];
      var e = edges[i].copy(p2).sub(p1);
      normals[i].copy(e).perp().normalize();
    }
    return this;
  };


  // Compute the axis-aligned bounding box. Any current state
  // (translations/rotations) will be applied before constructing the AABB.
  //
  // Note: Returns a _new_ `Polygon` each time you call this.
  /**
   * @return {Polygon} The AABB
   */
  Polygon.prototype["getAABB"] = Polygon.prototype.getAABB = function() {
    var points = this["calcPoints"];
    var len = points.length;
    var xMin = points[0]["x"];
    var yMin = points[0]["y"];
    var xMax = points[0]["x"];
    var yMax = points[0]["y"];
    for (var i = 1; i < len; i++) {
      var point = points[i];
      if (point["x"] < xMin) {
        xMin = point["x"];
      }
      else if (point["x"] > xMax) {
        xMax = point["x"];
      }
      if (point["y"] < yMin) {
        yMin = point["y"];
      }
      else if (point["y"] > yMax) {
        yMax = point["y"];
      }
    }
    return new Box(this["pos"].clone().add(new Vector(xMin, yMin)), xMax - xMin, yMax - yMin).toPolygon();
  };

  // Compute the centroid (geometric center) of the polygon
  //
  // See https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
  Polygon.prototype["getCentroid"] = Polygon.prototype.getCentroid = function() {
    var points = this["calcPoints"];
    var len = points.length;
    var cx = 0;
    var cy = 0;
    var ar = 0;
    for (var i = 0; i < len; i++) {
      var p1 = points[i];
      var p2 = i === len - 1 ? points[0] : points[i+1]; // Loop around if last point
      var a = p1["x"] * p2["y"] - p2["x"] * p1["y"];
      cx += (p1["x"] + p2["x"]) * a;
      cy += (p1["y"] + p2["y"]) * a;
      ar += a;
    }
    ar = ar * 3; // we want 1 / 6 the area and we currently hae 2*area
    cx = cx / ar;
    cy = cy / ar;
    return new Vector(cx, cy);
  };


  // ## Box
  //
  // Represents an axis-aligned box, with a width and height.


  // Create a new box, with the specified position, width, and height. If no position
  // is given, the position will be `(0,0)`. If no width or height are given, they will
  // be set to `0`.
  /**
   * @param {Vector=} pos A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
   * @param {?number=} w The width of the box.
   * @param {?number=} h The height of the box.
   * @constructor
   */
  function Box(pos, w, h) {
    this['pos'] = pos || new Vector();
    this['w'] = w || 0;
    this['h'] = h || 0;
  }
  SAT['Box'] = Box;

  // Returns a polygon whose edges are the same as this box.
  /**
   * @return {Polygon} A new Polygon that represents this box.
   */
  Box.prototype['toPolygon'] = Box.prototype.toPolygon = function() {
    var pos = this['pos'];
    var w = this['w'];
    var h = this['h'];
    return new Polygon(new Vector(pos['x'], pos['y']), [
     new Vector(), new Vector(w, 0),
     new Vector(w,h), new Vector(0,h)
    ]);
  };

  // ## Response
  //
  // An object representing the result of an intersection. Contains:
  //  - The two objects participating in the intersection
  //  - The vector representing the minimum change necessary to extract the first object
  //    from the second one (as well as a unit vector in that direction and the magnitude
  //    of the overlap)
  //  - Whether the first object is entirely inside the second, and vice versa.
  /**
   * @constructor
   */
  function Response() {
    this['a'] = null;
    this['b'] = null;
    this['overlapN'] = new Vector();
    this['overlapV'] = new Vector();
    this.clear();
  }
  SAT['Response'] = Response;

  // Set some values of the response back to their defaults.  Call this between tests if
  // you are going to reuse a single Response object for multiple intersection tests (recommented
  // as it will avoid allcating extra memory)
  /**
   * @return {Response} This for chaining
   */
  Response.prototype['clear'] = Response.prototype.clear = function() {
    this['aInB'] = true;
    this['bInA'] = true;
    this['overlap'] = Number.MAX_VALUE;
    return this;
  };

  // ## Object Pools

  // A pool of `Vector` objects that are used in calculations to avoid
  // allocating memory.
  /**
   * @type {Array.<Vector>}
   */
  var T_VECTORS = [];
  for (var i = 0; i < 10; i++) { T_VECTORS.push(new Vector()); }

  // A pool of arrays of numbers used in calculations to avoid allocating
  // memory.
  /**
   * @type {Array.<Array.<number>>}
   */
  var T_ARRAYS = [];
  for (var i = 0; i < 5; i++) { T_ARRAYS.push([]); }

  // Temporary response used for polygon hit detection.
  /**
   * @type {Response}
   */
  var T_RESPONSE = new Response();

  // Tiny "point" polygon used for polygon hit detection.
  /**
   * @type {Polygon}
   */
  var TEST_POINT = new Box(new Vector(), 0.000001, 0.000001).toPolygon();

  // ## Helper Functions

  // Flattens the specified array of points onto a unit vector axis,
  // resulting in a one dimensional range of the minimum and
  // maximum value on that axis.
  /**
   * @param {Array.<Vector>} points The points to flatten.
   * @param {Vector} normal The unit vector axis to flatten on.
   * @param {Array.<number>} result An array.  After calling this function,
   *   result[0] will be the minimum value,
   *   result[1] will be the maximum value.
   */
  function flattenPointsOn(points, normal, result) {
    var min = Number.MAX_VALUE;
    var max = -Number.MAX_VALUE;
    var len = points.length;
    for (var i = 0; i < len; i++ ) {
      // The magnitude of the projection of the point onto the normal
      var dot = points[i].dot(normal);
      if (dot < min) { min = dot; }
      if (dot > max) { max = dot; }
    }
    result[0] = min; result[1] = max;
  }

  // Check whether two convex polygons are separated by the specified
  // axis (must be a unit vector).
  /**
   * @param {Vector} aPos The position of the first polygon.
   * @param {Vector} bPos The position of the second polygon.
   * @param {Array.<Vector>} aPoints The points in the first polygon.
   * @param {Array.<Vector>} bPoints The points in the second polygon.
   * @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
   *   will be projected onto this axis.
   * @param {Response=} response A Response object (optional) which will be populated
   *   if the axis is not a separating axis.
   * @return {boolean} true if it is a separating axis, false otherwise.  If false,
   *   and a response is passed in, information about how much overlap and
   *   the direction of the overlap will be populated.
   */
  function isSeparatingAxis(aPos, bPos, aPoints, bPoints, axis, response) {
    var rangeA = T_ARRAYS.pop();
    var rangeB = T_ARRAYS.pop();
    // The magnitude of the offset between the two polygons
    var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);
    var projectedOffset = offsetV.dot(axis);
    // Project the polygons onto the axis.
    flattenPointsOn(aPoints, axis, rangeA);
    flattenPointsOn(bPoints, axis, rangeB);
    // Move B's range to its position relative to A.
    rangeB[0] += projectedOffset;
    rangeB[1] += projectedOffset;
    // Check if there is a gap. If there is, this is a separating axis and we can stop
    if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
      T_VECTORS.push(offsetV);
      T_ARRAYS.push(rangeA);
      T_ARRAYS.push(rangeB);
      return true;
    }
    // This is not a separating axis. If we're calculating a response, calculate the overlap.
    if (response) {
      var overlap = 0;
      // A starts further left than B
      if (rangeA[0] < rangeB[0]) {
        response['aInB'] = false;
        // A ends before B does. We have to pull A out of B
        if (rangeA[1] < rangeB[1]) {
          overlap = rangeA[1] - rangeB[0];
          response['bInA'] = false;
        // B is fully inside A.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
      // B starts further left than A
      } else {
        response['bInA'] = false;
        // B ends before A ends. We have to push A out of B
        if (rangeA[1] > rangeB[1]) {
          overlap = rangeA[0] - rangeB[1];
          response['aInB'] = false;
        // A is fully inside B.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
      }
      // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
      var absOverlap = Math.abs(overlap);
      if (absOverlap < response['overlap']) {
        response['overlap'] = absOverlap;
        response['overlapN'].copy(axis);
        if (overlap < 0) {
          response['overlapN'].reverse();
        }
      }
    }
    T_VECTORS.push(offsetV);
    T_ARRAYS.push(rangeA);
    T_ARRAYS.push(rangeB);
    return false;
  }
  SAT['isSeparatingAxis'] = isSeparatingAxis;

  // Calculates which Voronoi region a point is on a line segment.
  // It is assumed that both the line and the point are relative to `(0,0)`
  //
  //            |       (0)      |
  //     (-1)  [S]--------------[E]  (1)
  //            |       (0)      |
  /**
   * @param {Vector} line The line segment.
   * @param {Vector} point The point.
   * @return  {number} LEFT_VORONOI_REGION (-1) if it is the left region,
   *          MIDDLE_VORONOI_REGION (0) if it is the middle region,
   *          RIGHT_VORONOI_REGION (1) if it is the right region.
   */
  function voronoiRegion(line, point) {
    var len2 = line.len2();
    var dp = point.dot(line);
    // If the point is beyond the start of the line, it is in the
    // left voronoi region.
    if (dp < 0) { return LEFT_VORONOI_REGION; }
    // If the point is beyond the end of the line, it is in the
    // right voronoi region.
    else if (dp > len2) { return RIGHT_VORONOI_REGION; }
    // Otherwise, it's in the middle one.
    else { return MIDDLE_VORONOI_REGION; }
  }
  // Constants for Voronoi regions
  /**
   * @const
   */
  var LEFT_VORONOI_REGION = -1;
  /**
   * @const
   */
  var MIDDLE_VORONOI_REGION = 0;
  /**
   * @const
   */
  var RIGHT_VORONOI_REGION = 1;

  // ## Collision Tests

  // Check if a point is inside a circle.
  /**
   * @param {Vector} p The point to test.
   * @param {Circle} c The circle to test.
   * @return {boolean} true if the point is inside the circle, false if it is not.
   */
  function pointInCircle(p, c) {
    var differenceV = T_VECTORS.pop().copy(p).sub(c['pos']);
    var radiusSq = c['r'] * c['r'];
    var distanceSq = differenceV.len2();
    T_VECTORS.push(differenceV);
    // If the distance between is smaller than the radius then the point is inside the circle.
    return distanceSq <= radiusSq;
  }
  SAT['pointInCircle'] = pointInCircle;

  // Check if a point is inside a convex polygon.
  /**
   * @param {Vector} p The point to test.
   * @param {Polygon} poly The polygon to test.
   * @return {boolean} true if the point is inside the polygon, false if it is not.
   */
  function pointInPolygon(p, poly) {
    TEST_POINT['pos'].copy(p);
    T_RESPONSE.clear();
    var result = testPolygonPolygon(TEST_POINT, poly, T_RESPONSE);
    if (result) {
      result = T_RESPONSE['aInB'];
    }
    return result;
  }
  SAT['pointInPolygon'] = pointInPolygon;

  // Check if two circles collide.
  /**
   * @param {Circle} a The first circle.
   * @param {Circle} b The second circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   the circles intersect.
   * @return {boolean} true if the circles intersect, false if they don't.
   */
  function testCircleCircle(a, b, response) {
    // Check if the distance between the centers of the two
    // circles is greater than their combined radius.
    var differenceV = T_VECTORS.pop().copy(b['pos']).sub(a['pos']);
    var totalRadius = a['r'] + b['r'];
    var totalRadiusSq = totalRadius * totalRadius;
    var distanceSq = differenceV.len2();
    // If the distance is bigger than the combined radius, they don't intersect.
    if (distanceSq > totalRadiusSq) {
      T_VECTORS.push(differenceV);
      return false;
    }
    // They intersect.  If we're calculating a response, calculate the overlap.
    if (response) {
      var dist = Math.sqrt(distanceSq);
      response['a'] = a;
      response['b'] = b;
      response['overlap'] = totalRadius - dist;
      response['overlapN'].copy(differenceV.normalize());
      response['overlapV'].copy(differenceV).scale(response['overlap']);
      response['aInB']= a['r'] <= b['r'] && dist <= b['r'] - a['r'];
      response['bInA'] = b['r'] <= a['r'] && dist <= a['r'] - b['r'];
    }
    T_VECTORS.push(differenceV);
    return true;
  }
  SAT['testCircleCircle'] = testCircleCircle;

  // Check if a polygon and a circle collide.
  /**
   * @param {Polygon} polygon The polygon.
   * @param {Circle} circle The circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testPolygonCircle(polygon, circle, response) {
    // Get the position of the circle relative to the polygon.
    var circlePos = T_VECTORS.pop().copy(circle['pos']).sub(polygon['pos']);
    var radius = circle['r'];
    var radius2 = radius * radius;
    var points = polygon['calcPoints'];
    var len = points.length;
    var edge = T_VECTORS.pop();
    var point = T_VECTORS.pop();

    // For each edge in the polygon:
    for (var i = 0; i < len; i++) {
      var next = i === len - 1 ? 0 : i + 1;
      var prev = i === 0 ? len - 1 : i - 1;
      var overlap = 0;
      var overlapN = null;

      // Get the edge.
      edge.copy(polygon['edges'][i]);
      // Calculate the center of the circle relative to the starting point of the edge.
      point.copy(circlePos).sub(points[i]);

      // If the distance between the center of the circle and the point
      // is bigger than the radius, the polygon is definitely not fully in
      // the circle.
      if (response && point.len2() > radius2) {
        response['aInB'] = false;
      }

      // Calculate which Voronoi region the center of the circle is in.
      var region = voronoiRegion(edge, point);
      // If it's the left region:
      if (region === LEFT_VORONOI_REGION) {
        // We need to make sure we're in the RIGHT_VORONOI_REGION of the previous edge.
        edge.copy(polygon['edges'][prev]);
        // Calculate the center of the circle relative the starting point of the previous edge
        var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);
        region = voronoiRegion(edge, point2);
        if (region === RIGHT_VORONOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos);
            T_VECTORS.push(edge);
            T_VECTORS.push(point);
            T_VECTORS.push(point2);
            return false;
          } else if (response) {
            // It intersects, calculate the overlap.
            response['bInA'] = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
        T_VECTORS.push(point2);
      // If it's the right region:
      } else if (region === RIGHT_VORONOI_REGION) {
        // We need to make sure we're in the left region on the next edge
        edge.copy(polygon['edges'][next]);
        // Calculate the center of the circle relative to the starting point of the next edge.
        point.copy(circlePos).sub(points[next]);
        region = voronoiRegion(edge, point);
        if (region === LEFT_VORONOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos);
            T_VECTORS.push(edge);
            T_VECTORS.push(point);
            return false;
          } else if (response) {
            // It intersects, calculate the overlap.
            response['bInA'] = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
      // Otherwise, it's the middle region:
      } else {
        // Need to check if the circle is intersecting the edge,
        // Change the edge into its "edge normal".
        var normal = edge.perp().normalize();
        // Find the perpendicular distance between the center of the
        // circle and the edge.
        var dist = point.dot(normal);
        var distAbs = Math.abs(dist);
        // If the circle is on the outside of the edge, there is no intersection.
        if (dist > 0 && distAbs > radius) {
          // No intersection
          T_VECTORS.push(circlePos);
          T_VECTORS.push(normal);
          T_VECTORS.push(point);
          return false;
        } else if (response) {
          // It intersects, calculate the overlap.
          overlapN = normal;
          overlap = radius - dist;
          // If the center of the circle is on the outside of the edge, or part of the
          // circle is on the outside, the circle is not fully inside the polygon.
          if (dist >= 0 || overlap < 2 * radius) {
            response['bInA'] = false;
          }
        }
      }

      // If this is the smallest overlap we've seen, keep it.
      // (overlapN may be null if the circle was in the wrong Voronoi region).
      if (overlapN && response && Math.abs(overlap) < Math.abs(response['overlap'])) {
        response['overlap'] = overlap;
        response['overlapN'].copy(overlapN);
      }
    }

    // Calculate the final overlap vector - based on the smallest overlap.
    if (response) {
      response['a'] = polygon;
      response['b'] = circle;
      response['overlapV'].copy(response['overlapN']).scale(response['overlap']);
    }
    T_VECTORS.push(circlePos);
    T_VECTORS.push(edge);
    T_VECTORS.push(point);
    return true;
  }
  SAT['testPolygonCircle'] = testPolygonCircle;

  // Check if a circle and a polygon collide.
  //
  // **NOTE:** This is slightly less efficient than polygonCircle as it just
  // runs polygonCircle and reverses everything at the end.
  /**
   * @param {Circle} circle The circle.
   * @param {Polygon} polygon The polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testCirclePolygon(circle, polygon, response) {
    // Test the polygon against the circle.
    var result = testPolygonCircle(polygon, circle, response);
    if (result && response) {
      // Swap A and B in the response.
      var a = response['a'];
      var aInB = response['aInB'];
      response['overlapN'].reverse();
      response['overlapV'].reverse();
      response['a'] = response['b'];
      response['b'] = a;
      response['aInB'] = response['bInA'];
      response['bInA'] = aInB;
    }
    return result;
  }
  SAT['testCirclePolygon'] = testCirclePolygon;

  // Checks whether polygons collide.
  /**
   * @param {Polygon} a The first polygon.
   * @param {Polygon} b The second polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testPolygonPolygon(a, b, response) {
    var aPoints = a['calcPoints'];
    var aLen = aPoints.length;
    var bPoints = b['calcPoints'];
    var bLen = bPoints.length;
    // If any of the edge normals of A is a separating axis, no intersection.
    for (var i = 0; i < aLen; i++) {
      if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, a['normals'][i], response)) {
        return false;
      }
    }
    // If any of the edge normals of B is a separating axis, no intersection.
    for (var i = 0;i < bLen; i++) {
      if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, b['normals'][i], response)) {
        return false;
      }
    }
    // Since none of the edge normals of A or B are a separating axis, there is an intersection
    // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
    // final overlap vector.
    if (response) {
      response['a'] = a;
      response['b'] = b;
      response['overlapV'].copy(response['overlapN']).scale(response['overlap']);
    }
    return true;
  }
  SAT['testPolygonPolygon'] = testPolygonPolygon;

  return SAT;
}));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

class Identity {
    constructor(id) {
        this.entityId = id;
    }
}

Identity.protocol = {
    entityId: nengi.UInt16
};

module.exports = Identity;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

class Allowed {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Allowed.protocol = {
    x: nengi.Float32,
    y: nengi.Float32
};

module.exports = Allowed;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

const nengi = __webpack_require__(3);

class WeaponFired {
    constructor(sourceId, x, y, tx, ty) {
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
    }
}

WeaponFired.protocol = {
    sourceId: nengi.UInt16,
    x: nengi.Float32,
    y: nengi.Float32,
    tx: nengi.Float32,
    ty: nengi.Float32
};

module.exports = WeaponFired;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

const PIXIRenderer = __webpack_require__(104);
const PlayerCharacter = __webpack_require__(21);
const Predictor = __webpack_require__(108);
const InputSystem = __webpack_require__(109);
const MoveCommand = __webpack_require__(22);
const FireCommand = __webpack_require__(23);

// ignoring certain data from the sever b/c we will be predicting these properties on the client
const ignoreProps = ['x', 'y', 'rotation'];
const shouldIgnore = (myId, update) => {
    if (update.id === myId) {
        if (ignoreProps.indexOf(update.prop) !== -1) {
            return true;
        }
    }
    return false;
};

class Simulator {
    constructor(client) {
        this.client = client;
        this.renderer = new PIXIRenderer();
        this.predictor = new Predictor(this);
        this.input = new InputSystem();
        this.entities = new Map();
        this.myId = -1;
    }

    createEntity(entity) {
        if (entity.protocol.name === 'PlayerCharacter') {
            let newEntity = new PlayerCharacter();
            Object.assign(newEntity, entity);
            this.entities.set(newEntity.id, newEntity);
            this.renderer.createEntity(entity);

            if (entity.id === this.myId) {
                this.predictor.setEntity(newEntity);
                // for debugging purposes turn the entity we control white
                this.renderer.entities.get(entity.id).body.tint = 0xffffff;
            }
        }
    }

    updateEntity(update) {
        if (!shouldIgnore(this.myId, update)) {
            let entity = this.entities.get(update.id);
            entity[update.prop] = update.value;
            this.renderer.updateEntity(update);
        }
    }

    deleteEntity(id) {
        this.renderer.deleteEntity(id);
        this.entities.delete(id);
    }

    processMessage(message) {
        if (message.protocol.name === 'Identity') {
            this.myId = message.entityId;
            console.log('identified as', this.myId);
        }

        if (message.protocol.name === 'Allowed') {
            this.predictor.setAuthPosition(message);
        }
    }

    processLocalMessage(message) {
        if (message.protocol.name === 'WeaponFired') {
            console.log('server says a weapon was fired');
            this.renderer.drawHitscan(message.x, message.y, message.tx, message.ty, 0xff0000);
        }
    }

    processJson(json) {}

    simulateShot(x, y, tx, ty) {
        // TODO: simulate impact against entities/terrain
        this.renderer.drawHitscan(x, y, tx, ty, 0xffffff);
    }

    update(delta) {
        let input = this.input.frameState;

        let rotation = 0;
        let worldCoord = this.renderer.toWorldCoordinates(this.input.currentState.mx, this.input.currentState.my);

        if (this.predictor.entity) {
            let dx = worldCoord.x - this.predictor.entity.x;
            let dy = worldCoord.y - this.predictor.entity.y;
            rotation = Math.atan2(dy, dx);
        }

        this.client.addCommand(new MoveCommand(input.w, input.a, input.s, input.d, rotation, delta));

        if (input.mouseDown) {
            this.client.addCommand(new FireCommand(worldCoord.x, worldCoord.y));
        }

        this.input.releaseKeys();

        this.predictor.predict(this.client.getUnconfirmedCommands());
        if (this.predictor.entity) {
            let entity = this.predictor.entity;
            this.renderer.move(entity.id, entity.x, entity.y, rotation);
            this.renderer.centerCamera(entity);
        }
        this.renderer.update();
    }
}

module.exports = Simulator;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

const PlayerCharacter = __webpack_require__(105);
const BackgroundGrid = __webpack_require__(107);

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

class PIXIRenderer {
    constructor(input, sounds) {
        this.canvas = document.getElementById('main-canvas');

        this.masterScale = 1;
        this.myEntity = null;
        this.entities = new Map();

        this.renderer = PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT, {
            view: this.canvas,
            antialiasing: false,
            transparent: false,
            resolution: 1
        });

        this.stage = new PIXI.Container();
        this.camera = new PIXI.Container();
        this.background = new PIXI.Container();
        this.middleground = new PIXI.Container();
        this.foreground = new PIXI.Container();

        this.camera.addChild(this.background);
        this.camera.addChild(this.middleground);
        this.camera.addChild(this.foreground);
        this.stage.addChild(this.camera);

        this.background.addChild(new BackgroundGrid());

        window.addEventListener('resize', () => {
            this.resize();
        });

        this.resize();
    }

    drawBulletEnd(alreadyHitPlayer, x, y) {
        if (alreadyHitPlayer) return;
        var effect = new ImpactEffect(x, y);
        this.camera.addChild(effect);
        this.effects.push(effect);
    }

    resize() {
        let targetRatio = 16 / 9;
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        let newRatio = newWidth / newHeight;

        if (newRatio > targetRatio) {
            newWidth = newHeight * targetRatio;
            this.canvas.style.width = newWidth + 'px';
            this.canvas.style.height = newHeight + 'px';
        } else {
            newHeight = newWidth / targetRatio;
            this.canvas.style.width = newWidth + 'px';
            this.canvas.style.height = newHeight + 'px';
        }
        this.canvas.style.marginTop = -newHeight / 2 + 'px';
        this.canvas.style.marginLeft = -newWidth / 2 + 'px';

        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '50%';
        this.canvas.style.left = '50%';

        this.renderer.resize(GAME_WIDTH, GAME_HEIGHT);
        this.camera.scale.set(this.masterScale);
    }

    createEntity(entity) {
        if (entity.protocol.name === 'PlayerCharacter') {
            let clientEntity = new PlayerCharacter(entity);
            this.entities.set(entity.id, clientEntity);
            this.middleground.addChild(clientEntity);
        }
    }

    updateEntity(update) {
        let entity = this.entities.get(update.id);
        entity[update.prop] = update.value;
    }

    message(message) {}

    deleteEntity(id) {
        if (this.entities.get(id)) {
            this.foreground.removeChild(this.entities.get(id));
            this.middleground.removeChild(this.entities.get(id));
            this.entities.delete(id);
        }
    }

    localMessage(message) {
        if (message.protocol.name === 'WeaponFired') {}
    }

    drawHitscan(x, y, targetX, targetY, color) {
        let graphics = new PIXI.Graphics();
        graphics.lineStyle(1, color);
        graphics.moveTo(x, y);
        graphics.lineTo(targetX, targetY);
        this.middleground.addChild(graphics);
        setTimeout(() => {
            this.middleground.removeChild(graphics);
            graphics.destroy({
                children: true,
                texture: true,
                baseTexture: true
            });
        }, 64);
    }

    centerCameraAndFollowScope(entity, scopeStrength, delta) {
        let halfCanvasWidth = GAME_WIDTH * 0.5;
        let halfCanvasHeight = GAME_HEIGHT * 0.5;
        let magicCanvasHeight = GAME_HEIGHT * 0.71875; // 0.5 adjusted to 16:9 resolution's disparity between horizontal and vertical
        // TODO: cache this on window resize
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        // how off center the mouse is
        let dx = this.input.currentState.mx - windowWidth * 0.5;
        let dy = this.input.currentState.my - windowHeight * 0.5;

        // length of the mouse's vector, from center
        let vlen = Math.sqrt(dx * dx + dy * dy);
        // maxmimum length of the vector if it went to the screen edge
        let mlen = Math.sqrt(windowWidth * 0.5 * windowWidth * 0.5 + windowHeight * 0.5 * windowHeight * 0.5);
        // unit vector (direction that the vector points, without magnitude)
        let normX = dx / vlen;
        let normY = dy / vlen;
        // how much the player is trying to scope, from 0 - 1.0 based on how far away the mouse is from the character
        let scopeAmount = vlen / mlen;

        // new camera position (the math says center the camera on the player, then offset in the scope direction+amount, then offset it by the kickAmount)
        let targetX = -entity.x * this.masterScale + halfCanvasWidth + -normX * scopeAmount * scopeStrength * halfCanvasWidth + this.kickAmount * normX;
        let targetY = -entity.y * this.masterScale + halfCanvasHeight + -normY * scopeAmount * scopeStrength * halfCanvasHeight + this.kickAmount * normY;

        // difference between where the camera is an where the camera should be (for gentle movement of the camera)
        let dx0 = targetX - this.camera.x;
        let dy0 = targetY - this.camera.y;
        let adjustmentStrength = 20;

        let cameraX = Math.round(this.camera.x + dx0 * adjustmentStrength * delta);
        let cameraY = Math.round(this.camera.y + dy0 * adjustmentStrength * delta);

        this.camera.x = cameraX;
        this.camera.y = cameraY;
    }

    centerCamera(entity) {
        this.camera.x = -entity.x * this.masterScale + 0.5 * GAME_WIDTH;
        this.camera.y = -entity.y * this.masterScale + 0.5 * GAME_HEIGHT;
    }

    toWorldCoordinates(mouseX, mouseY) {
        let rect = this.canvas.getBoundingClientRect(); // cache this instead of call it repeatedly maybe?
        let domScale = rect.width / GAME_WIDTH;

        let adjustedMouseX = (mouseX / this.masterScale - window.innerWidth * 0.5 / this.masterScale) * (1 / domScale);
        let adjustedMouseY = (mouseY / this.masterScale - window.innerHeight * 0.5 / this.masterScale) * (1 / domScale);

        let camScaledX = this.camera.x / this.masterScale - GAME_WIDTH / (this.masterScale * 2);
        let camScaledY = this.camera.y / this.masterScale - GAME_HEIGHT / (this.masterScale * 2);

        return {
            x: adjustedMouseX - camScaledX,
            y: adjustedMouseY - camScaledY
        };
    }

    /*
    showOnHitEffect(entityId, color) {
        let entity = this.entities.get(entityId)
        if (entity) {
            if (GAME_CONSTANTS.DEBUG.RENDER_HITBOXES) {
                let graphics = new PIXI.Graphics()
                graphics.lineStyle(1, color)
                graphics.drawCircle(entity.x, entity.y, 10)
                this.middleground.addChild(graphics)
                setTimeout(() => {
                    this.middleground.removeChild(graphics)
                    graphics.destroy({
                        children: true,
                        texture: true,
                        baseTexture: true
                    })
                }, 64)
            }
        }
    }
    */

    move(id, x, y, rotation) {
        let entity = this.entities.get(id);
        entity.x = x;
        entity.y = y;
        entity.rotation = rotation;
    }

    update(delta) {
        if (this.myEntity) {
            this.centerCameraAndFollowScope(this.myEntity, 0.5, delta);
        }

        this.entities.forEach(entity => {
            entity.update(delta);
        });

        this.renderer.render(this.stage);
    }
}

module.exports = PIXIRenderer;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

const HitpointBar = __webpack_require__(106);

class PlayerCharacter extends PIXI.Container {
    constructor(entity) {
        super();
        this.x = entity.x;
        this.y = entity.y;
        this.isAlive = entity.isAlive;

        this.hitpointBar = new HitpointBar();
        this.hitpointBar.x = -6;
        this.hitpointBar.y = -20;
        this.hitpointBar.setHitpointPercentage(entity._hitpoints / 100);

        this._hitpoints = 0;
        this.hitpoints = entity.hitpoints;
        this.rotation = entity.rotation;

        this.body = new PIXI.Graphics();
        this.body.beginFill(0xffffff);
        this.body.drawCircle(0, 0, 25);
        this.body.endFill();

        this.body.tint = 0xff0000;

        this.nose = new PIXI.Graphics();
        this.nose.beginFill(0xff99999);
        this.nose.moveTo(0, -25);
        this.nose.lineTo(40, 0);
        this.nose.lineTo(0, 25);
        this.nose.endFill();

        this.addChild(this.nose);
        this.addChild(this.body);

        this.addChild(this.hitpointBar);
    }

    set hitpoints(value) {
        this._hitpoints = value;
        this.hitpointBar.setHitpointPercentage(value / 100);
    }

    update(delta) {
        if (!this.isAlive) {
            this.nose.alpha = 0;
        } else {
            this.nose.alpha = 1;
        }
    }
}

module.exports = PlayerCharacter;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

class HitpointBar extends PIXI.Container {
    constructor() {
        super();

        this.background = new PIXI.Graphics();
        this.background.beginFill(0x000000);
        this.background.drawRect(0, 0, 12, 40);
        this.background.endFill();
        this.addChild(this.background);

        this.foreground = new PIXI.Graphics();
        this.foreground.beginFill(0x00ff00);
        this.foreground.drawRect(1, 1, 10, 38);
        this.foreground.endFill();
        this.addChild(this.foreground);
    }

    setHitpointPercentage(percent) {
        this.foreground.scale.y = percent;
    }

}

module.exports = HitpointBar;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

class BackgroundGrid extends PIXI.Container {
    constructor() {
        super();

        for (var i = 0; i < 11; i++) {
            let line = new PIXI.Graphics();
            line.lineStyle(2, 0x333333);
            line.moveTo(i * 100, 0);
            line.lineTo(i * 100, 1000);
            this.addChild(line);
        }

        for (var i = 0; i < 11; i++) {
            let line = new PIXI.Graphics();
            line.lineStyle(2, 0x333333);
            line.moveTo(0, i * 100);
            line.lineTo(1000, i * 100);
            this.addChild(line);
        }
    }
}

module.exports = BackgroundGrid;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

class Predictor {
    constructor(simulator) {
        this.simulator = simulator;
        this.entity = null;
        this.auth = {
            x: null,
            y: null
        };
    }

    setAuthPosition(pos) {
        this.auth.x = pos.x;
        this.auth.y = pos.y;
    }

    setEntity(entity) {
        this.entity = entity;
    }

    predict(commandSets) {
        if (this.entity) {
            this.entity.allowedX = this.auth.x;
            this.entity.allowedY = this.auth.y;

            commandSets.forEach(commandSet => {
                commandSet.forEach(command => {
                    if (command.protocol.name === 'MoveCommand') {
                        this.entity.move(command, true);

                        if (!command.predicted) {
                            this.entity.weaponSystem.update(command.delta);
                            command.predicted = true;
                        }
                    }

                    if (command.protocol.name === 'FireCommand' && !command.predicted) {
                        if (this.entity.fire()) {
                            this.simulator.simulateShot(this.entity.x, this.entity.y, command.x, command.y);
                            command.predicted = true;
                        }
                    }
                });
            });
        }
    }
}

module.exports = Predictor;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

class InputSystem {
    constructor() {
        this.canvasEle = document.getElementById('main-canvas');
        this.onmousemove = null;

        this.currentState = {
            w: false,
            s: false,
            a: false,
            d: false,
            r: false,
            mx: 0,
            my: 0,
            mouseDown: false
        };

        this.frameState = {
            w: false,
            s: false,
            a: false,
            d: false,
            r: false,
            mouseDown: false,
            justReleasedR: false

            // disable right click
        };document.addEventListener('contextmenu', event => event.preventDefault());

        document.addEventListener('keydown', event => {
            //console.log('keydown', event)
            // w or up arrow
            if (event.keyCode === 87 || event.keyCode === 38) {
                this.currentState.w = true;
                this.frameState.w = true;
            }
            // a or left arrow
            if (event.keyCode === 65 || event.keyCode === 37) {
                this.currentState.a = true;
                this.frameState.a = true;
            }
            // s or down arrow
            if (event.keyCode === 83 || event.keyCode === 40) {
                this.currentState.s = true;
                this.frameState.s = true;
            }
            // d or right arrow
            if (event.keyCode === 68 || event.keyCode === 39) {
                this.currentState.d = true;
                this.frameState.d = true;
            }

            // r
            if (event.keyCode === 82) {
                this.currentState.r = true;
                this.frameState.r = true;
            }
        });

        document.addEventListener('keyup', event => {
            //console.log('keyup', event)
            if (event.keyCode === 87 || event.keyCode === 38) {
                this.currentState.w = false;
            }
            if (event.keyCode === 65 || event.keyCode === 37) {
                this.currentState.a = false;
            }
            if (event.keyCode === 83 || event.keyCode === 40) {
                this.currentState.s = false;
            }
            if (event.keyCode === 68 || event.keyCode === 39) {
                this.currentState.d = false;
            }

            if (event.keyCode === 82) {
                if (this.currentState.r === true) {
                    // used to implement reload on keyup instead of keydown
                    this.frameState.justReleasedR = true;
                }
                this.currentState.r = false;
            }
        });

        document.addEventListener('mousemove', event => {
            this.currentState.mx = event.clientX;
            this.currentState.my = event.clientY;
            if (this.onmousemove) {
                this.onmousemove(event);
            }
        });

        document.addEventListener('pointerdown', event => {
            this.currentState.mouseDown = true;
            this.frameState.mouseDown = true;
        });

        document.addEventListener('mouseup', event => {
            this.currentState.mouseDown = false;
        });
    }

    releaseKeys() {
        this.frameState.w = this.currentState.w;
        this.frameState.a = this.currentState.a;
        this.frameState.s = this.currentState.s;
        this.frameState.d = this.currentState.d;
        this.frameState.r = this.currentState.r;
        this.frameState.mouseDown = this.currentState.mouseDown;
        this.frameState.justReleasedR = false;
    }
}

module.exports = InputSystem;

/***/ })
/******/ ]);