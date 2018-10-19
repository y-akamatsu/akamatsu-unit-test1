class Math {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return '数値以外のものが引数に含まれています';
    }
    return a + b;
  }

  static sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return '数値以外のものが引数に含まれています';
    }
    return a - b;
  }

  static mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return '数値以外のものが引数に含まれています';
    }
    return a * b;
  }

  static div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return '数値以外のものが引数に含まれています';
    }
    return a / b;
  }
};





