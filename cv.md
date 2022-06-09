# Bogdan Ilin

## Contact

**E-mail:** starkavichi@gmail.com

**GitHub:** /avichez :computer:

## About Me

I’d describe myself as independent and self-motivated, just let me give you a brief description(story). I have been interested in Web development since school, always keeping an eye on new web technologies, and finally, eventually, I have decided to change my profession, change my life, and begin my hard journey toward the IT direction, to learn the most demanded technologies that need for creating such different and interesting projects.

## Skills

- HTML5
- CSS3 / SCSS
- JavaScript (ES6+)
- Git / GitHub
- React (beginner)
- Figma / Photoshop

## Code examples

```javascript
const binaryArrayToNumber = (arr) => {
  let arrReverse = arr.reverse();
  let result = 0;
  for (let i = 0; i < arrReverse.length; i++) {
    if (i === 0) {
      if (arrReverse[i] === 1) {
        result += 1;
      }
    } else if (arrReverse[i] === 1) {
      result += Math.pow(2, i);
    }
  }
  return result;
};

// or just
const binaryArrayToNumber1 = (arr) => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0, 1, 1, 0]));
```

## Education

- **Maritime College:** Odessa Maritime College of Technical Fleet
- **Maritime Academy:** Kherson State Maritime Academy (Bachelor)
  - _Courses_ YouTube, Udemy, Documantation.

## Languages

- **Russian** - Native
- **Ukrainian** - Native
- **English** - Intermediate
