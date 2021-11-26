pub fn add(text: &str) -> String {
  return internal_add(text);
}

fn internal_add(text: &str) -> String {
  return String::from(format!("Hello, {}!", text));
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_add() {
      assert_eq!("Hello, a!", add("a"));
      assert_eq!("Hello, b!", add("b"));
  }

  #[test]
  fn test_internal_add() {
      assert_eq!("Hello, a!", internal_add("a"));
      assert_eq!("Hello, b!", internal_add("b"));
  }
}
