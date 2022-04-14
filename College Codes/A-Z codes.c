// A
void A(int n) {
    
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || j==n-1 || i==n/2){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// B
void B(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || j==n-1 || i==n/2 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// C
void C(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// D
void D(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// E

void E(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n/2 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// F

void F(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n/2 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// G

void G(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || (i==n-1 && j<=n/2) || (j>=n/2 && i==n/2) || (i>=n/2 && j==n/2) || (j==n-1&&i>=n/2)){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// H
void H(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || i==n/2 || j==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// I
void I(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==n/2 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// J

void J(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==n/2 || (i-j)==n/2){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// K
void K(int n) {
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || (i-j)==n/n+1 || (i+j)==n/2+1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// L
void L(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// M

void M(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || j==n-1||((i-j)==0 && i<=n/2) || ((i+j)==n-1 && (i<=n/2)) ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// N
void N(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || j==n-1||i==j ||(i+j==n-1 && i>n/2)&& i<n/2+1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}


// O
void O(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// P

void P(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n/2||(j==n-1&&i<=n/2) ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// Q

void Q(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1 || (i>=n/2 && (i-j)==0)){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// R

void R(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n/2||(j==n-1&&i<=n/2) || (i-j)==n/n+1 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// S

void S(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || (j==0&&i<=n/2) || (i==n/2) || (j==n-1&&i>=n/2) || i ==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// T
void T(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0||j==n/2){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// U
void U(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0||i==n-1||j==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// V

void V(int n) {

    for(int i=0;i<n;i++){
        for(int j=0;j<n*2;j++){
            if((i<=n/2&&i-j==0)||(j>n/2 &&(i+j==n-1))){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }

}

// W

void W(int n) {

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==0 || j==n-1||((i-j)==0 && i>=n/2) || ((i+j)==n-1 && (i>=n/2)) ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }

}


// X

void X(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if((i-j)==0 || (i+j)==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// Y

void Y(int n) {
  for(int i=0;i<n;i++){
        for(int j=0;j<n*2;j++){
            if((i<=n/2&&i-j==0)||(j>n/2 &&(i+j==n-1))||(i>n/2&&j==n/2)){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
   

// Z
void Z(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if((i==0)|| (i+j)==n-1 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}



// 0
void zero(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1 ){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// 1

void one(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j==n/2){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// 2
void two(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || (i+j)==n-1 || i==n-1 || (i==1&& j==0)){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// 3

void three(int n) {
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0||i==n-1||i==n/2||j==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

// 4

void four(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if( (j==0&&i<=n/2) || (i==n/2) || (j==n-1&&i>=n/2) || j==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}


// 5
void five(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || (j==0&&i<=n/2) || (i==n/2) || (j==n-1&&i>=n/2) || i ==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// 6

void six(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || (j==0&&i<=n/2) || (i==n/2) || (j==n-1&&i>=n/2) || i ==n-1 || j==0){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}


// 7
void seven(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || (i+j)==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// 8

void eight(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || j==n-1 || i==n/2 || i==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}
// 9

void nine(int n) {
   
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if( (j==0&&i<=n/2) || (i==n/2) || (j==n-1&&i>=n/2) || i==n-1||i==0 ||j==n-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}

void main(){
    A(5);
}