function Solution(){

	this.insert=function(head,data){
        //complete this method
        current=head;
        temp=null;
        if(current==null){
            temp=new Node(data);
            current=temp;
            return temp;
        }
        else{
            while(current.next!=null){
                current=current.next;
            }
            current.next=new Node(data);
            return head;
        }
    };
