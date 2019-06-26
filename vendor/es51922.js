// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Es51922 = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Es51922 = (function() {
  Es51922.AdpRanges = Object.freeze({
    ADP0: 0,
    ADP1: 1,
    ADP2: 2,
    ADP3: 3,
    ADP4: 4,

    0: "ADP0",
    1: "ADP1",
    2: "ADP2",
    3: "ADP3",
    4: "ADP4",
  });

  Es51922.Functions = Object.freeze({
    CURRENT_22A: 0,
    DIODE: 1,
    FREQ: 2,
    RESISTANCE: 3,
    TEMPERATURE: 4,
    CONTINUITY: 5,
    CAPACITANCE: 6,
    CURRENT_MANUAL: 9,
    VOLTAGE: 11,
    CURRENT_MICROAMP: 13,
    ADP: 14,
    CURRENT_MILLIAMP: 15,

    0: "CURRENT_22A",
    1: "DIODE",
    2: "FREQ",
    3: "RESISTANCE",
    4: "TEMPERATURE",
    5: "CONTINUITY",
    6: "CAPACITANCE",
    9: "CURRENT_MANUAL",
    11: "VOLTAGE",
    13: "CURRENT_MICROAMP",
    14: "ADP",
    15: "CURRENT_MILLIAMP",
  });

  function Es51922(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Es51922.prototype._read = function() {
    this.rawRange = this._io.readU1();
    this.rawDigit0 = this._io.readU1();
    this.rawDigit1 = this._io.readU1();
    this.rawDigit2 = this._io.readU1();
    this.rawDigit3 = this._io.readU1();
    this.rawDigit4 = this._io.readU1();
    this.rawFunc = this._io.readU1();
    this.rawStatus = this._io.readU1();
    this.rawOption0 = this._io.readU1();
    this.rawOption1 = this._io.readU1();
    this.rawOption2 = this._io.readU1();
    this.rawOption3 = this._io.readU1();
    this.eom = this._io.ensureFixedContents([13, 10]);
  }

  var Options = Es51922.Options = (function() {
    function Options(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Options.prototype._read = function() {
    }
    Object.defineProperty(Options.prototype, 'hold', {
      get: function() {
        if (this._m_hold !== undefined)
          return this._m_hold;
        this._m_hold = (this._parent.rawOption3 ^ (48 & 1)) == 1;
        return this._m_hold;
      }
    });
    Object.defineProperty(Options.prototype, 'maximum', {
      get: function() {
        if (this._m_maximum !== undefined)
          return this._m_maximum;
        this._m_maximum = (this._parent.rawOption0 ^ (48 & 3)) == 1;
        return this._m_maximum;
      }
    });
    Object.defineProperty(Options.prototype, 'auto', {
      get: function() {
        if (this._m_auto !== undefined)
          return this._m_auto;
        this._m_auto = (this._parent.rawOption2 ^ (48 & 1)) == 1;
        return this._m_auto;
      }
    });
    Object.defineProperty(Options.prototype, 'peakMaximum', {
      get: function() {
        if (this._m_peakMaximum !== undefined)
          return this._m_peakMaximum;
        this._m_peakMaximum = (this._parent.rawOption1 ^ (48 & 2)) == 1;
        return this._m_peakMaximum;
      }
    });
    Object.defineProperty(Options.prototype, 'currentValue', {
      get: function() {
        if (this._m_currentValue !== undefined)
          return this._m_currentValue;
        this._m_currentValue = (this._parent.rawOption0 ^ (48 & 0)) == 1;
        return this._m_currentValue;
      }
    });
    Object.defineProperty(Options.prototype, 'vahz', {
      get: function() {
        if (this._m_vahz !== undefined)
          return this._m_vahz;
        this._m_vahz = (this._parent.rawOption2 ^ (48 & 0)) == 1;
        return this._m_vahz;
      }
    });
    Object.defineProperty(Options.prototype, 'lpf', {
      get: function() {
        if (this._m_lpf !== undefined)
          return this._m_lpf;
        this._m_lpf = (this._parent.rawOption3 ^ (48 & 0)) == 1;
        return this._m_lpf;
      }
    });
    Object.defineProperty(Options.prototype, 'minimum', {
      get: function() {
        if (this._m_minimum !== undefined)
          return this._m_minimum;
        this._m_minimum = (this._parent.rawOption0 ^ (48 & 2)) == 1;
        return this._m_minimum;
      }
    });
    Object.defineProperty(Options.prototype, 'acMode', {
      get: function() {
        if (this._m_acMode !== undefined)
          return this._m_acMode;
        this._m_acMode = ((this._parent.rawOption2 ^ (48 & 2)) == 1 ? "current" : "voltage");
        return this._m_acMode;
      }
    });
    Object.defineProperty(Options.prototype, 'peakMinimum', {
      get: function() {
        if (this._m_peakMinimum !== undefined)
          return this._m_peakMinimum;
        this._m_peakMinimum = (this._parent.rawOption1 ^ (48 & 1)) == 1;
        return this._m_peakMinimum;
      }
    });
    Object.defineProperty(Options.prototype, 'dcMode', {
      get: function() {
        if (this._m_dcMode !== undefined)
          return this._m_dcMode;
        this._m_dcMode = ((this._parent.rawOption2 ^ (48 & 3)) == 1 ? "current" : "voltage");
        return this._m_dcMode;
      }
    });
    Object.defineProperty(Options.prototype, 'relative', {
      get: function() {
        if (this._m_relative !== undefined)
          return this._m_relative;
        this._m_relative = (this._parent.rawOption0 ^ (48 & 1)) == 1;
        return this._m_relative;
      }
    });
    Object.defineProperty(Options.prototype, 'vbar', {
      get: function() {
        if (this._m_vbar !== undefined)
          return this._m_vbar;
        this._m_vbar = (this._parent.rawOption3 ^ (48 & 2)) == 1;
        return this._m_vbar;
      }
    });

    return Options;
  })();

  var BaseAdpRange = Es51922.BaseAdpRange = (function() {
    function BaseAdpRange(_io, _parent, _root, adpMode) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.adpMode = adpMode;

      this._read();
    }
    BaseAdpRange.prototype._read = function() {
    }

    return BaseAdpRange;
  })();

  var BaseFunc = Es51922.BaseFunc = (function() {
    function BaseFunc(_io, _parent, _root, baseUnit, baseRange, mode) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.baseUnit = baseUnit;
      this.baseRange = baseRange;
      this.mode = mode;

      this._read();
    }
    BaseFunc.prototype._read = function() {
    }

    return BaseFunc;
  })();

  var BaseRange = Es51922.BaseRange = (function() {
    function BaseRange(_io, _parent, _root, unit, multiplier, precision, mode) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.unit = unit;
      this.multiplier = multiplier;
      this.precision = precision;
      this.mode = mode;

      this._read();
    }
    BaseRange.prototype._read = function() {
    }

    return BaseRange;
  })();

  var Status = Es51922.Status = (function() {
    function Status(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Status.prototype._read = function() {
    }
    Object.defineProperty(Status.prototype, 'signMultiplier', {
      get: function() {
        if (this._m_signMultiplier !== undefined)
          return this._m_signMultiplier;
        this._m_signMultiplier = ((this._parent.rawStatus ^ (48 & 2)) == 1 ? -1 : 1);
        return this._m_signMultiplier;
      }
    });
    Object.defineProperty(Status.prototype, 'batteryLow', {
      get: function() {
        if (this._m_batteryLow !== undefined)
          return this._m_batteryLow;
        this._m_batteryLow = (this._parent.rawStatus ^ (48 & 1)) == 1;
        return this._m_batteryLow;
      }
    });
    Object.defineProperty(Status.prototype, 'underload', {
      get: function() {
        if (this._m_underload !== undefined)
          return this._m_underload;
        this._m_underload = (this._parent.rawOption1 ^ (48 & 2)) == 1;
        return this._m_underload;
      }
    });
    Object.defineProperty(Status.prototype, 'degrees', {
      get: function() {
        if (this._m_degrees !== undefined)
          return this._m_degrees;
        this._m_degrees = ((this._parent.rawStatus ^ (48 & 3)) == 1 ? "C" : "F");
        return this._m_degrees;
      }
    });
    Object.defineProperty(Status.prototype, 'overload', {
      get: function() {
        if (this._m_overload !== undefined)
          return this._m_overload;
        this._m_overload = (this._parent.rawStatus ^ (48 & 0)) == 1;
        return this._m_overload;
      }
    });
    Object.defineProperty(Status.prototype, 'operation', {
      get: function() {
        if (this._m_operation !== undefined)
          return this._m_operation;
        this._m_operation = (this.overload ? "overload" : (this.underload ? "underload" : "normal"));
        return this._m_operation;
      }
    });

    return Status;
  })();
  Object.defineProperty(Es51922.prototype, 'status', {
    get: function() {
      if (this._m_status !== undefined)
        return this._m_status;
      this._m_status = new Status(this._io, this, this._root);
      return this._m_status;
    }
  });
  Object.defineProperty(Es51922.prototype, 'func', {
    get: function() {
      if (this._m_func !== undefined)
        return this._m_func;
      this._m_func = (this.rawFunc ^ 48);
      return this._m_func;
    }
  });
  Object.defineProperty(Es51922.prototype, 'digits', {
    get: function() {
      if (this._m_digits !== undefined)
        return this._m_digits;
      var _pos = this._io.pos;
      this._io.seek(1);
      this._raw__m_digits = this._io.readBytes(5);
      this._m_digits = KaitaiStream.processXorOne(this._raw__m_digits, 48);
      this._io.seek(_pos);
      return this._m_digits;
    }
  });
  Object.defineProperty(Es51922.prototype, 'options', {
    get: function() {
      if (this._m_options !== undefined)
        return this._m_options;
      this._m_options = new Options(this._io, this, this._root);
      return this._m_options;
    }
  });
  Object.defineProperty(Es51922.prototype, 'range', {
    get: function() {
      if (this._m_range !== undefined)
        return this._m_range;
      switch (((this.rawRange ^ 48) | ((this.rawFunc ^ 48) << 4))) {
      case 177:
        this._m_range = new BaseRange(this._io, this, this._root, "V", 1.0, 3, "voltage");
        break;
      case 0:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 3, "current");
        break;
      case 146:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 2, "current");
        break;
      case 224:
        this._m_range = new BaseAdpRange(this._io, this, this._root, Es51922.AdpRanges.ADP0);
        break;
      case 35:
        this._m_range = new BaseRange(this._io, this, this._root, "kHz", 1000.0, 2, "frequency");
        break;
      case 32:
        this._m_range = new BaseRange(this._io, this, this._root, "Hz", 1.0, 2, "frequency");
        break;
      case 96:
        this._m_range = new BaseRange(this._io, this, this._root, "nF", 1E-9, 3, "capacitance");
        break;
      case 209:
        this._m_range = new BaseRange(this._io, this, this._root, "\xb5A", 0.000001, 1, "current");
        break;
      case 97:
        this._m_range = new BaseRange(this._io, this, this._root, "nF", 1E-9, 2, "capacitance");
        break;
      case 145:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 3, "current");
        break;
      case 52:
        this._m_range = new BaseRange(this._io, this, this._root, "M\u03a9", 1000000.0, 4, "resistance");
        break;
      case 101:
        this._m_range = new BaseRange(this._io, this, this._root, "mF", 0.001, 4, "capacitance");
        break;
      case 144:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 4, "current");
        break;
      case 100:
        this._m_range = new BaseRange(this._io, this, this._root, "\xb5F", 0.000001, 2, "capacitance");
        break;
      case 98:
        this._m_range = new BaseRange(this._io, this, this._root, "\xb5F", 0.000001, 4, "capacitance");
        break;
      case 208:
        this._m_range = new BaseRange(this._io, this, this._root, "\xb5A", 0.000001, 2, "current");
        break;
      case 33:
        this._m_range = new BaseRange(this._io, this, this._root, "Hz", 1.0, 1, "frequency");
        break;
      case 103:
        this._m_range = new BaseRange(this._io, this, this._root, "mF", 0.001, 2, "capacitance");
        break;
      case 99:
        this._m_range = new BaseRange(this._io, this, this._root, "\xb5F", 0.000001, 3, "capacitance");
        break;
      case 180:
        this._m_range = new BaseRange(this._io, this, this._root, "mV", 0.001, 2, "voltage");
        break;
      case 51:
        this._m_range = new BaseRange(this._io, this, this._root, "k\u03a9", 1000.0, 2, "resistance");
        break;
      case 227:
        this._m_range = new BaseAdpRange(this._io, this, this._root, Es51922.AdpRanges.ADP3);
        break;
      case 48:
        this._m_range = new BaseRange(this._io, this, this._root, "\u03a9", 1.0, 2, "resistance");
        break;
      case 178:
        this._m_range = new BaseRange(this._io, this, this._root, "V", 1.0, 2, "voltage");
        break;
      case 53:
        this._m_range = new BaseRange(this._io, this, this._root, "M\u03a9", 1000000.0, 3, "resistance");
        break;
      case 176:
        this._m_range = new BaseRange(this._io, this, this._root, "V", 1.0, 4, "voltage");
        break;
      case 38:
        this._m_range = new BaseRange(this._io, this, this._root, "MHz", 1000000.0, 2, "frequency");
        break;
      case 148:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 0, "current");
        break;
      case 241:
        this._m_range = new BaseRange(this._io, this, this._root, "mA", 0.001, 2, "current");
        break;
      case 226:
        this._m_range = new BaseAdpRange(this._io, this, this._root, Es51922.AdpRanges.ADP2);
        break;
      case 179:
        this._m_range = new BaseRange(this._io, this, this._root, "V", 1.0, 1, "voltage");
        break;
      case 240:
        this._m_range = new BaseRange(this._io, this, this._root, "mA", 0.001, 3, "current");
        break;
      case 225:
        this._m_range = new BaseAdpRange(this._io, this, this._root, Es51922.AdpRanges.ADP1);
        break;
      case 37:
        this._m_range = new BaseRange(this._io, this, this._root, "MHz", 1000000.0, 3, "frequency");
        break;
      case 36:
        this._m_range = new BaseRange(this._io, this, this._root, "MHz", 1000000.0, 4, "frequency");
        break;
      case 16:
        this._m_range = new BaseRange(this._io, this, this._root, "V", 1.0, 4, "diode");
        break;
      case 147:
        this._m_range = new BaseRange(this._io, this, this._root, "A", 1.0, 1, "current");
        break;
      case 80:
        this._m_range = new BaseRange(this._io, this, this._root, "\u03a9", 1.0, 2, "continuity");
        break;
      case 102:
        this._m_range = new BaseRange(this._io, this, this._root, "mF", 0.001, 3, "capacitance");
        break;
      case 49:
        this._m_range = new BaseRange(this._io, this, this._root, "k\u03a9", 1000.0, 4, "resistance");
        break;
      case 34:
        this._m_range = new BaseRange(this._io, this, this._root, "kHz", 1000.0, 3, "frequency");
        break;
      case 54:
        this._m_range = new BaseRange(this._io, this, this._root, "M\u03a9", 1000000.0, 2, "resistance");
        break;
      case 228:
        this._m_range = new BaseAdpRange(this._io, this, this._root, Es51922.AdpRanges.ADP4);
        break;
      case 50:
        this._m_range = new BaseRange(this._io, this, this._root, "k\u03a9", 1000.0, 3, "resistance");
        break;
      }
      return this._m_range;
    }
  });
  Object.defineProperty(Es51922.prototype, 'precision', {
    get: function() {
      if (this._m_precision !== undefined)
        return this._m_precision;
      this._m_precision = (this.range.precision == 0 ? 1.0 : (this.range.precision == 1 ? 0.1 : (this.range.precision == 2 ? 0.01 : (this.range.precision == 3 ? 0.001 : 0.0001))));
      return this._m_precision;
    }
  });
  Object.defineProperty(Es51922.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      if ( ((this.func != Es51922.Functions.TEMPERATURE) && (this.func != Es51922.Functions.ADP)) ) {
        this._m_value = (((((((((this.rawDigit0 ^ 48) * 10000) + ((this.rawDigit1 ^ 48) * 1000)) + ((this.rawDigit2 ^ 48) * 100)) + ((this.rawDigit3 ^ 48) * 10)) + (this.rawDigit4 ^ 48)) * this.range.multiplier) * this.precision) * this.status.signMultiplier);
      }
      return this._m_value;
    }
  });

  return Es51922;
})();
return Es51922;
}));
