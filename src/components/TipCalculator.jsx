import { useState } from 'react'

function TipCalculator() {
  const [bill, setBill] = useState(0)
  const [tipPercent, setTipPercent] = useState(10)
  const [people, setPeople] = useState(1)
  const tipOptions = [10, 15, 20]

  const handleTip = (percent) => {
    setTipPercent(percent)
  }

  

  // TODO 1: แปลง bill (string) เป็นตัวเลขที่ปลอดภัย (กัน NaN)
  // TODO 2: คำนวณ tip, total, perPerson สดตอน render — ห้ามเป็น useState
  // TODO 3: ปุ่มลัด % ทิป ด้วย .map() (ไม่ใช่เขียนปุ่มแยกทีละอัน)
  // TODO 4: ปุ่มรีเซ็ตคืนค่าทุกช่องพร้อมกัน

  console.log(tipPercent)

  return (
    <section className="max-w-md mx-auto my-12 p-6 border rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">คำนวณทิป</h2>
      <div className='flex flex-row'>
        <label>ยอดบิล</label>

        <p>ทิป</p>
        <input className='border'
          type="number"
          placeholder='Bill Amout'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))} />
      </div>
      {/* TODO: input ยอดบิล / ปุ่มลัด %ทิป / input จำนวนคน / ผลลัพธ์ / ปุ่มรีเซ็ต */}
      {tipOptions.map((percent) => (
        <button
          key={percent}
          type="button"
          className="flex-row bg-blue-500"
          onClick={() => handleTip(percent)}
        >
          {percent}%
        </button>
      ))}

      <div className='flex flex-row'>
        <p>จำนวนคน</p>
        <br />
        <input className='border '
          type='number'
          placeholder='People Amout'
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))} />
      </div>

      {/*reset */}
      <button button
        className=""
        onClick={() => { setBill(0); setPeople(1); }}>reset</button>
    </section >
  )
}
export default TipCalculator
