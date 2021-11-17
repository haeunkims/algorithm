<p>Receives: pointer to head node of linked list list1
pointer to head node of linked list list2
Returns: pointer to head node of merged list</p>

<p> Declare pointer list for merged list and initialize to NULL</p>
<p>Declare pointer to pointer pNext and initialize it to the address of the merged list</p>
<p>if (list2 is NULL) // empty list
  <li>3.1 return list1 // nothing to merge</li>
<p>loop while list1 is not NULL</p>
   <li>4.1 if (data in list1 is greater than data in list2)</li>
   <li>4.1.1 swap list1 and list2</li>
   <li>4.2 set dereferenced value of pNext to list1</li>
   <li>4.3 set pNext to the address of the next node in list1</li>
   <li>4.4 set list1 to the dereferenced value of pNext // same as list1 = list1->next</li>
<p> end loop for list1</p>
<p>  set the dereferenced value of pNext to list2</p>
<p>  return list</p>
