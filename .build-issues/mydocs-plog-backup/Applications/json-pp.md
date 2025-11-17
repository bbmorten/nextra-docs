# JSON-PP

`json_pp` is a command-line tool used to pretty-print JSON data. It is especially useful for formatting JSON for readability, debugging, and processing. Here are some extensive examples of how you can use `json_pp` effectively:

---

### **1. Pretty-Print JSON from a File**

Format JSON stored in a file for readability:

```bash
cat example.json | json_pp
```

- **Input (`example.json`)**:

  ```json
  {"name":"Alice","age":30,"skills":["Python","Docker","Kubernetes"]}
  ```

- **Output**:

  ```json
  {
     "name" : "Alice",
     "age" : 30,
     "skills" : [
        "Python",
        "Docker",
        "Kubernetes"
     ]
  }
  ```

---

### **2. Pretty-Print JSON from an API Response**

Pipe JSON data from a `curl` API request into `json_pp`:

```bash
curl -s https://api.github.com/users/octocat | json_pp
```

- **Example Output**:

  ```json
  {
     "login" : "octocat",
     "id" : 583231,
     "avatar_url" : "https://avatars.githubusercontent.com/u/583231?v=4",
     "url" : "https://api.github.com/users/octocat"
  }
  ```

---

### **3. Validate JSON Syntax**

Check if a JSON file or string is valid:

```bash
cat invalid.json | json_pp
```

If the JSON is invalid, `json_pp` will throw an error with details about the issue.

---

### **4. Minify JSON**

Convert pretty-printed JSON back into compact format using `-json_opt`:

```bash
cat example.json | json_pp -json_opt canonical,utf8
```

- **Input**:

  ```json
  {
     "name" : "Alice",
     "age" : 30,
     "skills" : [
        "Python",
        "Docker",
        "Kubernetes"
     ]
  }
  ```

- **Output**:

  ```json
  {"name":"Alice","age":30,"skills":["Python","Docker","Kubernetes"]}
  ```

---

### **5. Use JSON Options**

Customize output with additional options using `-json_opt`:

- **Sort Keys Canonically**:

  ```bash
  echo '{"b":1,"a":2}' | json_pp -json_opt canonical
  ```

  Output:

  ```json
  {
     "a" : 2,
     "b" : 1
  }
  ```

- **Force UTF-8 Output**:

  ```bash
  echo '{"message":"Hello, 世界"}' | json_pp -json_opt utf8
  ```

  Output:

  ```json
  {
     "message" : "Hello, 世界"
  }
  ```

---

### **6. Combine with Other Tools**

#### Filter and Format JSON

Use `jq` with `json_pp` for advanced filtering:

```bash
curl -s https://api.github.com/users/octocat | jq '.login, .id' | json_pp
```

#### Pretty-Print JSON Logs

If working with JSON log files:

```bash
tail -f logs.json | json_pp
```

---

### **7. Integrate with Scripts**

Use `json_pp` in shell scripts to process JSON files or responses:

```bash
#!/bin/bash
API_RESPONSE=$(curl -s https://api.github.com/users/octocat)
echo "$API_RESPONSE" | json_pp
```

---

### **8. Combine with File Redirection**

#### Pretty-Print and Save

Pretty-print JSON data and save the output:

```bash
cat example.json | json_pp > pretty_output.json
```

#### Validate JSON File

Redirect errors to a log file:

```bash
cat invalid.json | json_pp 2>error.log
```

---

### **9. Debugging Nested JSON**

Use `json_pp` to analyze deeply nested JSON structures:

```bash
curl -s https://api.github.com/repos/octocat/hello-world | json_pp
```

---

### **10. Interactive Usage**

Combine `json_pp` with `fzf` for interactive filtering:

```bash
cat example.json | json_pp | fzf
```

---

`json_pp` is a powerful and lightweight tool for JSON formatting and debugging. Its simplicity and ability to integrate with other Unix tools make it indispensable for developers working with APIs, configurations, or log files. Let me know if you'd like to explore further customizations or usage scenarios!
