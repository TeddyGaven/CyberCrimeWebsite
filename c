#include<stdio.h>
int size=20;

int linser(int ar[], int n, int x)
{
      for(int i=0; i<n; i++)
      {
          if(ar[i] == x)
          printf("element found at %d",i);
          else
          printf("element not found")
      }

}

int main()
{
    int ar[size], i, n, x;
    print("enter the no of elements");
    scanf("%d",&n);
    printf("enter the elements");
    for(i=0; i<n; i++)
    {
        scanf("%d",&ar[i]);
    }
    printf("enter the element to be searched");
    scanf("%d",&x);
    linser(ar, n, x);
}    