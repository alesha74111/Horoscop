 //Варианты
      function imgContent() {
            const imageData1 = document.querySelector(".imageA").src;
            const imageData2 = document.querySelector(".imageB").src;
            
          //1
          if (
            (imageData1.match("aries") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("aries"))
            ||
            (imageData1.match("pisces") && imageData2.match("aries")) ||
            (imageData1.match("aries") && imageData2.match("pisces"))
            ||
            (imageData1.match("taurus") && imageData2.match("gemini")) ||
            (imageData1.match("gemini") && imageData2.match("taurus"))
            ||
            (imageData1.match("taurus") && imageData2.match("leo")) ||
            (imageData1.match("leo") && imageData2.match("taurus"))
            ||
            (imageData1.match("taurus") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("taurus"))
            ||
            (imageData1.match("gemini") && imageData2.match("leo")) ||
            (imageData1.match("leo") && imageData2.match("gemini"))
            ||
            (imageData1.match("gemini") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("gemini"))
            ||
            (imageData1.match("gemini") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("gemini"))
            ||
            (imageData1.match("cancer") && imageData2.match("leo")) ||
            (imageData1.match("leo") && imageData2.match("cancer"))
            ||
            (imageData1.match("cancer") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("cancer"))
            ||
            (imageData1.match("leo") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("leo"))  
            ||
            (imageData1.match("scorpio") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("scorpio"))
            ||
            (imageData1.match("scorpio") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("scorpio"))
            ||
            (imageData1.match("sagittarius") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("sagittarius"))
            ||
            (imageData1.match("sagittarius") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("sagittarius"))
            ||
            (imageData1.match("capricorn") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("capricorn"))
            ||
            (imageData1.match("aquarius") && imageData2.match("aquarius"))
            ||
            (imageData1.match("aquarius") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("aquarius"))
        )   {
            document.getElementById("resultSubtitle").innerHTML = "1";
            document.getElementById("resultText").innerHTML =
                        "Совершенно несовместимы. Звездочки говорят, что отношения обречены, ведь вы слишком разные. Но, возможно, вы как инь-янь: хоть и совсем разные, но друг без друга никак? Здесь уже зависит от вас, так что испытываете чувство - попробуйте";
            }
          //2
            if (
            (imageData1.match("aries") && imageData2.match("taurus")) ||
            (imageData1.match("taurus") && imageData2.match("aries")) 
            ||
            (imageData1.match("cancer") && imageData2.match("aries")) ||
            (imageData1.match("aries") && imageData2.match("cancer"))
            ||
            (imageData1.match("scorpio") && imageData2.match("aries")) ||
            (imageData1.match("aries") && imageData2.match("scorpio"))
            ||
            (imageData1.match("aries") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("aries"))
            ||
            (imageData1.match("taurus") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("taurus"))
            ||
            (imageData1.match("gemini") && imageData2.match("cancer")) ||
            (imageData1.match("cancer") && imageData2.match("gemini"))
            ||
            (imageData1.match("gemini") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("gemini"))
            ||
            (imageData1.match("cancer") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("cancer"))
            ||
            (imageData1.match("leo") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("leo"))
            ||
            (imageData1.match("leo") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("leo"))
            ||
            (imageData1.match("virgo") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("virgo"))
            ||
            (imageData1.match("virgo") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("virgo"))    
            ||
            (imageData1.match("libra") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("libra"))
            ||
            (imageData1.match("libra") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("libra"))
        )   {
            document.getElementById("resultSubtitle").innerHTML = "2";
            document.getElementById("resultText").innerHTML =
                        "Плохая совместимость. Мы любим американские горки – девиз ваших отношений.Ваш путь в отношениях, если и будет, то, мягко говоря, тернист. Но если есть чувство, когда это кого-то останавливало?";
            }
          //3
            if (
            (imageData1.match("aries") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("aries"))
            ||
            (imageData1.match("aries") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("aries"))
            ||
            (imageData1.match("aries") && imageData2.match("aries")) 
            ||
            (imageData1.match("taurus") && imageData2.match("taurus")) 
            ||
            (imageData1.match("taurus") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("taurus"))
            ||
            (imageData1.match("taurus") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("taurus"))
            ||
            (imageData1.match("gemini") && imageData2.match("gemini")) 
            ||
            (imageData1.match("gemini") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("gemini"))
            ||
                (imageData1.match("cancer") && imageData2.match("cancer"))
            ||
            (imageData1.match("cancer") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("cancer"))    
            ||
            (imageData1.match("leo") && imageData2.match("leo")) 
            ||
            (imageData1.match("leo") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("leo"))
            ||
            (imageData1.match("virgo") && imageData2.match("virgo"))
            ||
            (imageData1.match("virgo") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("virgo"))
            ||
            (imageData1.match("libra") && imageData2.match("libra"))  
            ||
            (imageData1.match("scorpio") && imageData2.match("scorpio"))
            ||
            (imageData1.match("sagittarius") && imageData2.match("sagittarius"))
            ||
            (imageData1.match("capricorn") && imageData2.match("capricorn"))
            ||
            (imageData1.match("pisces") && imageData2.match("pisces"))
        
      ) {
            document.getElementById("resultSubtitle").innerHTML = "3";
            document.getElementById("resultText").innerHTML =
                        "Нейтральная совместимость. Либо пан, либо пропал. Для таких отношений главное пройти проверку временем. Вы как оливки: начнете любить друг друга, только когда оба повзрослеете";
          }
          //4
            if (
            (imageData1.match("aries") && imageData2.match("gemini")) ||
            (imageData1.match("gemini") && imageData2.match("aries"))
            ||
            (imageData1.match("aries") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("aries"))
            ||
            (imageData1.match("taurus") && imageData2.match("cancer")) ||
            (imageData1.match("cancer") && imageData2.match("taurus"))
            ||
            (imageData1.match("taurus") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("taurus"))
            ||
            (imageData1.match("gemini") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("gemini"))
            ||
            (imageData1.match("cancer") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("cancer"))
            ||
            (imageData1.match("cancer") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("cancer"))
            ||
            (imageData1.match("leo") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("leo"))
            ||
            (imageData1.match("leo") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("leo"))
            ||
            (imageData1.match("virgo") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("virgo"))    
            ||
            (imageData1.match("virgo") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("virgo"))    
            ||
            (imageData1.match("libra") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("libra"))
            ||
            (imageData1.match("scorpio") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("scorpio"))
            ||
            (imageData1.match("sagittarius") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("sagittarius"))
            ||
            (imageData1.match("capricorn") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("capricorn"))
      ) {
            document.getElementById("resultSubtitle").innerHTML = "4";
            document.getElementById("resultText").innerHTML =
                        "Хорошая совместимость. Такие отношения всегда начинаются с фразы: 'Божее, какое конченное', когда вас бесит в человеке все, но тянет друг к другу, как магнитом. И в голове каша. Но дальше друг без друга уже невозможно";
          }
          //5
            if (
            (imageData1.match("aries") && imageData2.match("leo")) ||
            (imageData1.match("leo") && imageData2.match("aries"))
            || 
            (imageData1.match("aries") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("aries"))
            ||
            (imageData1.match("taurus") && imageData2.match("virgo")) ||
            (imageData1.match("virgo") && imageData2.match("taurus"))
            ||
            (imageData1.match("gemini") && imageData2.match("libra")) ||
            (imageData1.match("libra") && imageData2.match("gemini"))
            ||
            (imageData1.match("gemini") && imageData2.match("aquarius")) ||
            (imageData1.match("aquarius") && imageData2.match("gemini"))
            ||
            (imageData1.match("cancer") && imageData2.match("scorpio")) ||
            (imageData1.match("scorpio") && imageData2.match("cancer"))
            ||
            (imageData1.match("cancer") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("cancer"))    
            ||
            (imageData1.match("leo") && imageData2.match("sagittarius")) ||
            (imageData1.match("sagittarius") && imageData2.match("leo"))
            ||
            (imageData1.match("virgo") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("virgo"))    
            ||
            (imageData1.match("libra") && imageData2.match("capricorn")) ||
            (imageData1.match("capricorn") && imageData2.match("libra"))
            ||
            (imageData1.match("libra") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("libra"))
            ||
            (imageData1.match("scorpio") && imageData2.match("pisces")) ||
            (imageData1.match("pisces") && imageData2.match("scorpio"))
      ) {
            document.getElementById("resultSubtitle").innerHTML = "5";
            document.getElementById("resultText").innerHTML =
                    "Идеальная совместимость. Здесь уровень Love Is - обнявшись, смотреть, как падают звезды. Обычно такие отношения начинаются с длинной френдзоны, а в один момент перерастают в самую крепкую любовь и семью.";
      }
      }
imgContent(imageData,imageData1);