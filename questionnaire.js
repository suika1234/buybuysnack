var questionnaire = {
  introduction: {
    title: " Buy Buy Snack ",
    shortdescription: `Take a 3-question quiz
to find delicious snacks`,
    description: `With this short quiz, you can <span class="highlight">quickly</span>
find delicious and nutritious treats that fit your taste and your lifestyle`,
    productssofar: `These are the recommended products based on your selections so far. <br/>
<span class="warning">Please double check labels and manufacturer web site for dietary and allergy restrictions before consuming</span>`,
    finalproducts: `<span class="highlight">These are the final recommended products based on the quiz</span>. <br/>
<span class="warning">Please double check labels and manufacturer web site for dietary and allergy restrictions before consuming</span>`
  },
  questions: [
  {
    id: "flavor",
    question: "1. What flavors do you like?",
    options: {
      "flavor-sweet": "Sweet",
      "flavor-chocolaty": "Chocolaty",
      "flavor-fruity": "Fruity",
      "flavor-nutty": "Nutty"
      /*"flavor-savory": "Savory"*/
    },
    multiple: false
  },
  {
    id: "diet",
    question: "2. Do you follow any diet?",
    options: {
      "diet-lowcalorie": "Low calorie",
      "diet-lowcarbs": "Low carbs",
      "diet-lowfat": "Low fat",
      "diet-lowsugar": "Low sugar",
      "diet-lowcholesterol": "Low cholesterol",
      "diet-highprotein": "High protein"
    },
    multiple: false
  },
  {
    id: "restrictions",
    question: "3. Do you have any dietary restrictions?",
    options: {
      "restrictions-glutenfree": "Gluten free",
      "restrictions-dairyfree": "Dairy free",
      "restrictions-nutfree": "Nut free",
      "restrictions-soyfree": "Soy free",
      "restrictions-vegan": "Vegan"
    },
    multiple: true
  }
]
};
