 this.getHeight = function(root) {
        if(root==null){
            return -1
        }
        let max=Math.max(this.getHeight(root.left),this.getHeight(root.right))
        return 1+max
    };
