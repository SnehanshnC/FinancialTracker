// JavaScript Functions
function addTransaction() {
    
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
  
    
    const newRow = document.createElement('tr');
  
    
    const dateCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const categoryCell = document.createElement('td');
    const actionCell = document.createElement('td');
  
    
    dateCell.textContent = date;
    amountCell.textContent = amount;
    nameCell.textContent = name;
    categoryCell.textContent = category;
  
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      newRow.remove();
    });
    actionCell.appendChild(deleteButton);
  
    
    newRow.appendChild(dateCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(categoryCell);
    newRow.appendChild(actionCell);
  
    
    const table = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    table.appendChild(newRow);
  
    
    document.getElementById('date').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('name').value = '';
    document.getElementById('category').value = '';
  }