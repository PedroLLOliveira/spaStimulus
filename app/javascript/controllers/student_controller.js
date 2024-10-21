import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.renderList();
  }

  static base_uri = "http://localhost:3000"

  async createNewStudent(event) {
    event.preventDefault();
    const data = {
      name: this.element.querySelector("input[id='name']").value,
      telephone: this.element.querySelector("input[id='telephone']").value,
      email: this.element.querySelector("input[id='email']").value,
      registration: this.element.querySelector("input[id='registration']").value,
    }
    
    const url = `${this.constructor.base_uri}/students`
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      this.renderList();
    } catch(error) {
      console.log(error);
    }
    
  }

  handleNew() {
    this.element.innerHTML = `
    <form data-action="submit->student#createNewStudent" class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>  
      <div class="mb-5">
        <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your telephone</label>
        <input type="telephone" id="telephone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>  
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>
      <div class="mb-5">
        <label for="registration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your registration</label>
        <input type="text" id="registration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <button type="button" data-action="click->student#renderList" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</button>
    </form>

    `
  }

  async renderList() {
    try {
      const response = await fetch(`${this.constructor.base_uri}/students`);

      const students = await response.json();
      
      if(students.length > 0) {
        this.element.innerHTML= `
          <button class="px-3 py-1.5 bg-blue-600 text-white font-bold mb-6 rounded-sm" data-action="click->student#handleNew">New</button>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nmae
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Telephone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Registration
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                  ${students.map(student=>`
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${student.id}
                        </th>
                        <td class="px-6 py-4">
                            ${student.name}
                        </td>
                        <td class="px-6 py-4">
                            ${student.telephone}
                        </td>
                        <td class="px-6 py-4">
                            ${student.email}
                        </td>
                        <td class="px-6 py-4">
                            ${student.registration}
                        </td>
                        <td class="px-6 py-4 flex gap-6">
                            <button data-action="click->student#editStudent" data-student-id=${student.id} class="font-medium text-yellow-600 dark:text-yellow-500 hover:underline">Edit</button>
                            <button data-action="click->student#deleteStudent" data-student-id=${student.id} class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                  `).join('')}  
                </tbody>
            </table>
        </div>
        `
      } else {
        this.element.innerHTML = '<h1>There are no registered students...</h1>'
      }
    } catch(error) {
      console.log(error);
    }
  }

  async updateStudent(event) {
    const data = {
      name: this.element.querySelector("input[id='name']").value,
      telephone: this.element.querySelector("input[id='telephone']").value,
      email: this.element.querySelector("input[id='email']").value,
      registration: this.element.querySelector("input[id='registration']").value,
    }
    const url = `${this.constructor.base_uri}/students/${this.element.querySelector("input[id='id']").value}`
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      this.renderList();
    } catch(error) {
      console.log(error);
    }

  }

  async editStudent(event) {
    const id = event.currentTarget.dataset.studentId;
    const response = await fetch(`${this.constructor.base_uri}/students/${id}`)
    const student = await response.json();
    this.element.innerHTML = `
      <form data-action="submit->student#updateStudent" class="max-w-sm mx-auto">
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your name</label>
          <input type="hidden" id="id" value="${student.id}"/>
          <input type="text" id="name" value="${student.name}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>  
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your telephone</label>
          <input type="telephone" id="telephone" value="${student.telephone}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>  
        <div class="mb-5">
          <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input type="email" id="email" value="${student.email}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your registration</label>
          <input type="text" id="registration" value="${student.registration}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <button type="button" data-action="click->student#renderList" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</button>
      </form>
    `

    // try{
    //   const response = await fetch(url, {
    //     method:'PUT',
    //     'Content-Type': 'application/json',
    //     body: data
    //   })

    // } catch(error) {
    //   console.log(error);
      
    // }
  }

  async deleteStudent(event) {
    const id = event.currentTarget.dataset.studentId;
    const url = `${this.constructor.base_uri}/students/${id}`
    try{
      const response = await fetch(url, {
        method:'DELETE',
        'Content-Type': 'application/json',
      })
      this.renderList();
    } catch(error) {
      console.log(error);
      
    }
  }
}
