# type of testing
   - unit testing          ]  these two type of testing part of dev 
   - integration testing   ]
   - end to end testing

# install
  - npm i -D @testing-library/react
  - npm i -D jest
  add on depen for testing using babel in jest website command
    - npm install --save-dev babel-jest @babel/core @babel/preset-env
    config the bable
      - create the file iin the root level and config the file
      - config the parcel to disable the default babel transpilation
    config the jest
       - npm install --save-dev create-jest
       - npx create-jest
    install @babel/preset-react - to make jsx work in test cases
      - include @babel/preset-react inside the my bael config  
    install @testing-library/jest-dom  

      = when there we multipe items to selected amd test we should use getallbyrole "all" which select the multiple

      = describe("",()=>{})-which is used group the test cases

      = we can also it for test because it is alias of test
