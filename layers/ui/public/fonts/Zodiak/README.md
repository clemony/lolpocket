# Installing Webfonts
Follow these simple Steps.

## 1.
Put `zodiak/` Folder into a Folder called `fonts/`.

## 2.
Put `zodiak.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `zodiak.css` depends on your Website Filesystem.

## 4.
Import `zodiak.css` at the top of you main Stylesheet.

```
@import url('zodiak.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Zodiak-Variable;
font-family: Zodiak-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 900.0

Available axes:
'wght' (range from 100.0 to 900.0

