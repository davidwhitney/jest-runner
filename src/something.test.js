describe("Desc 1", () => {
  
  it("Desc 1 - Test 1", () => {
    const a = 1;
    const b = 1;
    
    expect(a).toBe(b);
  });
  
  describe("Desc 1 - Desc 2", () => {
      
    it("Desc 1 - Desc 2 - Test 1", () => {
      const a = 1;
      const b = 1;

      expect(a).toBe(b);
      expect(b).toBe(a);
    });
    
    it("Desc 1 - Desc 2 - Test 2", () => {
      const a = 1;
      const b = 1;

      expect(a).toBe(b);
      expect(b).toBe(a);
    });    
  });
  
    
  it("Desc 1 - Test 2", () => {
    const a = 1;
    const b = 1;
    
    expect(a).toBe(b);
  });
  
  it("Test 3 - fails", () => {
    expect("a").toBe("b");
  })
  
});