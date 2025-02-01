// problem with any
function render1(document: any) {
  document.toUpperCase();
  document.draw();
  document.run();

  /**
   * even above functions not defined for 'document' object, compiler not given any error since we use 'any' type.
   */
}

// unknown type is prefered more tha any
function render2(document: unknown) {
  if (typeof document == "string") {
    document.toUpperCase();
  }
  //   document.draw();
  //   document.run();

  /**
   * since compiler doesn't know anything about the document type, it gives compile errors.
   * Use narrowing to avoid from compile errors.
   */
}
