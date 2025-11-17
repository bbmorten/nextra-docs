# Python Tips

##  Module Paths

To import the `Order` class from the specified file while in the Python REPL, you need to make Python aware of the module's path. Here's how to do it step by step:

---

### **1. Add the Path to `sys.path`**

The `sys.path` list tells Python where to look for modules. Add the directory containing your `orders` package to `sys.path`.

```python
import sys
sys.path.append('/Users/bulent/git-repos/elearning/oreilly-courses/python/Online-Shopping/myshop')
```

---

### **2. Import the `Order` Class**

Once the path is added, you can import the `Order` class from the `orders.models` module:

```python
from orders.models import Order
```

---

### **Complete Example**

```python
import sys

# Add the path of the project
sys.path.append('/Users/bulent/git-repos/elearning/oreilly-courses/python/Online-Shopping/myshop')

# Import the Order class
from orders.models import Order

# Use the Order class (example)
print(Order)
```

---

### **3. Verify the Import**

If you encounter any errors, ensure that:

- The `orders` directory has an `__init__.py` file (even if it's empty) to make it a Python package.
- The `Order` class is properly defined in `models.py`.

---

### **Alternative: Change the Working Directory**

If you prefer, you can change the current working directory of the REPL to the path containing your project. Then, imports will work without modifying `sys.path`:

```python
import os
os.chdir('/Users/bulent/git-repos/elearning/oreilly-courses/python/Online-Shopping/myshop')

# Import the Order class
from orders.models import Order
```

---

Let me know if you encounter any issues!

##  Packaging Guide

Biraz araştırma sonrası bunu deneyelim.

[Packaging Guide Link](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
