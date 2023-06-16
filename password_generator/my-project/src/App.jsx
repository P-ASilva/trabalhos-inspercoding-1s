import { useState } from 'react';
import _ from 'lodash';

export default function App() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const specs = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
  const [length,setLength] = useState(15);
  const [password1,setPassword1] = useState("");
  const [password2,setPassword2] = useState("");
  const [clicked,setClicked] = useState(false);
  const [numbers,setNumbers] = useState(false);
  const [special,setSpecial] = useState(false);

  const updateLength = e => {
    setLength(e.target.value);
  }
  const updateSpecial = e => {
    setSpecial(!special)
  }
  const updateNumbers = e => {
    setNumbers(!numbers)
  }

  const generatePassword = () => {
    setClicked(true);
    var newPassword1 = ""
    var newPassword2 = ""

    for (let i = 1; i <= length; i++) {
      var randomItem1 = [_.sample(characters)]
      var randomItem2 = [_.sample(characters)]
      if (special) {
        randomItem1 += [_.sample(specs)]
        randomItem2 += [_.sample(specs)]
      }
      if (numbers) {
        randomItem1 += [_.sample(nums)]
        randomItem2 += [_.sample(nums)]
      }

      newPassword1 += _.sample(randomItem1)
      newPassword2 += _.sample(randomItem2)
    }
    setPassword1(newPassword1);
    setPassword2(newPassword2);
  }

  return (
    <div
    className="flex flex-col w-1/2 rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
    >
    <div>
      <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">Generate a Password.</h3>

      <div className="mt-4 border-t-2 border-gray-100 pt-4" >
        
        <p className="text-sm font-medium uppercase text-gray-500">Easy and simple</p>

        <div class='flex'>
          <label for="AcceptConditions" class="flex flex-row relative h-8 w-12 cursor-pointer">
            <input type="checkbox" id="AcceptConditions" class="peer sr-only" onChange={updateNumbers}/>
            <br/>
            <span class="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
            <p class='mt-5'>numbers?</p>
            <span
              class="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
            >
              <span
                class="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"
              >
              </span>
            </span>
          </label>

          <label for="AcceptConditions1" class="flex flex-row relative h-8 w-12 cursor-pointer ml-10">
            <input type="checkbox" id="AcceptConditions1" class="peer sr-only" onChange={updateSpecial}/>
            <br/>
            <span class="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
            <p class='mt-5'>special?</p>
            <span
              class="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
            >
              <span
                class="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"
              >
              </span>
            </span>
          </label>
        </div>
      </div>

      <label className="text-sm font-medium uppercase text-gray-500" for="length">Length (between 8 and 24):</label>
      <input class = "mt-5" onChange={updateLength} type="number" id="lenght" name="length" min={8} max={24} value={Number(length)}></input>

    
    </div>
    
    <div
      className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16"
    >
      <button className="font-medium sm:text-lg" onClick={generatePassword}>Just click it</button>
    </div>

    <h2 className="mt-5" hidden={!clicked}>Your first password!</h2>
    <input type="text" value={password1}></input>
    <h2 className="mt-5" hidden={!clicked}>Didn't like that one?</h2>
    <input type="text" value={password2}></input>
  </div>
  )
}
