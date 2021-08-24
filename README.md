# JS_CONFIRM
Javascript ile kolay onay penceleri
<br /><br />
## Örnek
### Örnek 1
```
$.Confirm({
  title: "Başlık",
  content: "Mesaj içeriği",
  yes: "EVET",
  no: "HAYIR",
  close: true,
  onYesClick: function(){
    console.log("Next");
  },
  onNoClick: function(){
    $("#mask").fadeOut("slow");
    console.log("Stop");
  }
});
```
### Örnek 2
```
$.Confirm({
  title: "Başlık",
  content: "Mesaj içeriği",
  yes: "TAMAM",
  onYesClick: function(){
    console.log("Next");
    $("#mask").fadeOut("slow");
  }
});
```
### Örnek 3
```
$.Confirm({
  title: "Başlık",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  close: true,
});
```
