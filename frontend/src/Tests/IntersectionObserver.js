class MockIntersectionObserver {
    constructor() {}
  
    observe() {
      // Do nothing
    }
  
    unobserve() {
      // Do nothing
    }
  
    disconnect() {
      // Do nothing
    }
  }
  
  global.IntersectionObserver = MockIntersectionObserver;
  