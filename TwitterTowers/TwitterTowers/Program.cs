using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeTest
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int width, heigh, result, i, j, space, star = 3, divide, divide1, rest;
            double side;
            while (true)
            {
                Console.WriteLine("Enter 1 for a square tower, 2 for a triangular tower and 3 for exit");
                result = int.Parse(Console.ReadLine());
                if (result == 3)
                    break;
                Console.WriteLine("Enter the height of the tower, minimum 2");
                heigh = int.Parse(Console.ReadLine());
                if (result == 1)
                {
                    Console.WriteLine("Enter the width of the tower");
                    width = int.Parse(Console.ReadLine());
                    if (width == heigh || heigh - width > 5)
                        Console.WriteLine(width * heigh);
                    else
                        Console.WriteLine(width * 2 + heigh * 2);
                }
                else if (result == 2)
                {
                    Console.WriteLine("Enter the width of the tower");
                    width = int.Parse(Console.ReadLine());
                    Console.WriteLine("Enter 1 to calculate the perimeter of the triangle or 2 to print the triangle");
                    result = int.Parse(Console.ReadLine());
                    side = Math.Sqrt(Math.Pow(width / 2, 2) + Math.Pow(heigh, 2));
                    if (result == 1)
                    {
                        Console.WriteLine(width + side * 2);
                    }
                    else if (result == 2)
                    {
                        if (width % 2 == 0 || width > heigh * 2)
                            Console.WriteLine("The triangle can't be printed");
                        else
                        {
                            divide = (heigh - 2) / ((width / 2) - 1);
                            divide1 = divide;
                            space = (width - 3) / 2;
                            rest = (heigh - 2) % ((width / 2) - 1);

                            for (i = 1; i <= heigh; i++)
                            {
                                for (j = 0; j < width; j++)
                                {
                                    if (j == (width / 2) & i == 1)
                                        Console.Write("*");
                                    else if (i == 1)
                                        Console.Write(" ");
                                    else if (i == heigh)
                                        Console.Write("*");
                                    else if (j < space || j >= space + star)
                                        Console.Write(" ");
                                    else if (i <= divide + rest + 1)
                                        Console.Write("*");
                                    else if (j < space || j >= space + star)
                                        Console.Write(" ");
                                    else if (i > divide + rest + 1)
                                        Console.Write("*");
                                    if (i > divide1 + rest + 1)
                                    {
                                        star += 2;
                                        space--;
                                        divide1 += divide;
                                    }
                                }

                                Console.Write("\n");
                            }

                        }

                    }
                }

            }
        }
    }
}
