    <script>
      let btns = document.querySelectorAll(".btn");
      let str = " ";

      btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          if (e.target.innerHTML === "=") {
            str = eval(str);
            document.querySelector("input").value = str;
          } else if (e.target.innerHTML === "AC") {
            str = " ";
            document.querySelector("input").value = str;
          } else if (e.target.innerHTML === "DE") {
            str = str.substring(0, str.length - 1);
            document.querySelector("input").value = str;
          } else if (e.target.innerHTML === "%") {
            str = str / 100;
            document.querySelector("input").value = str;
          } else {
            str = str + e.target.innerHTML;
            document.querySelector("input").value = str;
          }
        });
      });
    </script>
