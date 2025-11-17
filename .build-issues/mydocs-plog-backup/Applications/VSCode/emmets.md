#  EMMETS

##  HTML

###  Unordered List

```emmet
ul#item-list.item-class>li#list-item-$*5.list-item-class{item$}
```

### Section

```console
section>form>input:text[name=keyword#text1[placeholder="Filter by city"]+button.primary:button{Search}+section.results

```

```html
<section>
  <form action=""><input type="text" name="keyword" id="text1" placeholder="Filter by city">
  <button class="primary" type="button">Search</button>
</form>
</section>
<section class="results"></section>
```
