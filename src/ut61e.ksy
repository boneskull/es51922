meta:
  id: ut61e
  title: UT61E Data Protocol
  file-extension: ut61e

seq:
  - id: raw_range
    type: u1
  - id: digits
    type: digits
  - id: raw_function
    type: u1
  - id: options
    size: 5
    process: xor(48)

instances:
  range:
    type:
      switch-on: function_id
      cases:
        'functions::voltage': voltage_range
        'functions::current_22a': current_22a_range
        'functions::diode': diode_range
        'functions::current_manual': current_manual_range
        'functions::resistance': resistance_range
        'functions::frequency': frequency_range
        'functions::capacitance': capacitance_range
        'functions::continuity': continuity_range
        'functions::current_microamp': current_microamp_range
        'functions::current_milliamp': current_milliamp_range
        'functions::adp': adp_range
  function_id:
    value: raw_function ^ 48
    enum: functions
  function:
    type:
      switch-on: function_id
      cases:
        'functions::voltage': func('V', 'VoltageRange', 'voltage')
        'functions::current_22a': func('A', 'Current22ARange', 'current')
        'functions::diode': func('V', 'DiodeRange', 'diode')
        'functions::current_manual': func('A', 'CurrentManualRange', 'current')
        'functions::resistance': func('Ω', 'ResistanceRange', 'resistance')
        'functions::frequency': func('Hz', 'FrequencyRange', 'frequency')
        'functions::capacitance': func('F', 'CapacitanceRange', 'capacitance')
        'functions::continuity': func('Ω', 'ContinuityRange', 'continuity')
        'functions::current_microamp': func('A', 'CurrentMicroampRange', 'current')
        'functions::current_milliamp': func('A', 'CurrentMicroampRange', 'current')
        'functions::adp': func('', 'ADPRange', 'adp')
enums:
  adp_ranges:
    0: adp4
    1: adp3
    2: adp2
    3: adp1
    4: adp0
  functions:
    0: current_22a
    1: diode
    2: freq
    4: temperature # no range
    3: resistance
    5: continuity
    6: capacitance
    9: current_manual
    11: voltage
    13: current_microamp
    14: adp
    15: current_milliamp

types:
  range:
    params:
      - id: unit
        type: str
        encoding: UTF-8
      - id: multiplier
        type: f4
      - id: precision
        type: u1
    meta:
      xref:
        unit: unit
        precision: precision
        multiplier: multiplier
  func:
    params:
      - id: base_unit
        type: str
        encoding: UTF-8
      - id: base_range
        type: str
        encoding: UTF-8
      - id: name
        type: str
        encoding: UTF-8
    meta:
      xref:
        base_unit: base_unit
        base_range: base_range
        name: name
  voltage_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('V', 1.0, 4)
            1: range('V', 1.0, 3)
            2: range('V', 1.0, 2)
            3: range('V', 1.0, 1)
            4: range('mV', 1e-3, 2)
  current_22a_range:
    seq:
      - id: range
        type: range('A', 1.0, 3)
  current_microamp_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('µA', 1e-6, 2)
            1: range('µA', 1e-6, 1)
  current_milliamp_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('mA', 1e-3, 3)
            1: range('mA', 1e-3, 2)
  current_manual_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('A', 1.0, 4)
            1: range('A', 1.0, 3)
            2: range('A', 1.0, 2)
            3: range('A', 1.0, 1)
            4: range('A', 1.0, 0)
  resistance_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('Ω', 1.0, 2)
            1: range('kΩ', 1000.0, 4)
            2: range('kΩ', 1000.0, 3)
            3: range('kΩ', 1000.0, 2)
            4: range('MΩ', 1000000.0, 4)
            5: range('MΩ', 1000000.0, 3)
            6: range('MΩ', 1000000.0, 2)
  frequency_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('Hz', 1.0, 2)
            1: range('Hz', 1.0, 1)
            2: range('kHz', 1000.0, 3)
            3: range('kHz', 1000.0, 2)
            4: range('MHz', 1000000.0, 4)
            5: range('MHz', 1000000.0, 3)
            6: range('MHz', 1000000.0, 2)
  capacitance_range:
    seq:
      - id: range
        type:
          switch-on: _root.raw_range ^ 48
          cases:
            0: range('nF', 1e-9, 3)
            1: range('nF', 1e-9, 2)
            2: range('µF', 1e-6, 4)
            3: range('µF', 1e-6, 3)
            4: range('µF', 1e-6, 2)
            5: range('mF', 1e-3, 4)
            6: range('mF', 1e-3, 3)
            7: range('mF', 1e-3, 2)
  diode_range:
    seq:
      - id: range
        type: range('V', 1.0, 4)
  continuity_range:
    seq:
      - id: range
        type: range('Ω', 1.0, 2)
  adp_range:
    seq:
      - id: range
        type: u1
        enum: adp_ranges
  digits:
    seq:
      - id: digits
        process: xor(48)
        size: 5
        parent: _parent
