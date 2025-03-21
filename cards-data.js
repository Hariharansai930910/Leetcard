// Arrays & Strings Flashcards Data
const cardsData = [
  {
    id: 1,
    title: "Contains Duplicate",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Contains Duplicate</div>
      <p>Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: nums = [1, 2, 3, 3]
Output: true</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Contains Duplicate</div>
      <ul>
        <li>Think about how to efficiently check if you've seen a number before</li>
        <li>Could a hash set help with O(1) lookups?</li>
        <li>Consider the tradeoff between time and space complexity</li>
        <li>What's the brute force approach? How can we improve it?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Create an empty hash set to track seen numbers
2. Iterate through each number in the array:
   a. Check if the current number is already in the set
   b. If it is, return True (found a duplicate)
   c. If not, add the number to the set
3. If we finish the loop without finding duplicates, return False</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    method: "HASHSET",
    mnemonicsContent: `
      <ul>
        <li><strong>Track As You Go:</strong> Add each element to a hash set as you encounter it.</li>
        <li><strong>Early Return:</strong> Return as soon as you find a duplicate - no need to process the entire array.</li>
        <li><strong>Set vs. Array:</strong> Sets provide O(1) lookup, which is crucial for efficiency here.</li>
        <li><strong>Think "Have I Seen This Before?":</strong> This pattern applies to many problems.</li>
        <li><strong>Space-Time Tradeoff:</strong> Using extra space (the set) to achieve linear time complexity.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Valid Anagram",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Valid Anagram</div>
      <p>Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.</p>
      <p>An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: s = "racecar", t = "carrace"
Output: true</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Valid Anagram</div>
      <ul>
        <li>What makes two strings anagrams of each other?</li>
        <li>Consider counting the frequency of each character</li>
        <li>Can you use a hash table or array to track character counts?</li>
        <li>What's an early termination condition?</li>
        <li>Are there any optimizations for lowercase English letters?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. If the strings have different lengths, they cannot be anagrams, return False
2. Create a frequency array of size 26 (for lowercase letters)
3. Iterate through both strings simultaneously:
   a. Increment the count for characters in the first string
   b. Decrement the count for characters in the second string
4. Check if all counts in the frequency array are zero
   a. If yes, the strings are anagrams, return True
   b. If any count is non-zero, return False</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n+m)</span>
        <span class="complexity space">Space: O(1)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1

        for val in count:
            if val != 0:
                return False
        return True</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n+m)</span>
        <span class="complexity space">Space: O(1)</span>
      </div>
    `,
    method: "HASH TABLE",
    mnemonicsContent: `
      <ul>
        <li><strong>Character Counting:</strong> Track the frequency of each character - anagrams have identical counts.</li>
        <li><strong>Array vs. Dictionary:</strong> For lowercase letters, a fixed-size array is more efficient than a hash map.</li>
        <li><strong>Plus-Minus Method:</strong> Increment for first string, decrement for second - at the end all should be zero.</li>
        <li><strong>Early Return on Length:</strong> Different lengths means not anagrams - check this first!</li>
        <li><strong>ASCII Math:</strong> Remember 'a' is 97 in ASCII, so ord(char) - ord('a') maps to 0-25.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Two Sum",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Two Sum</div>
      <p>Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.</p>
      <p>You may assume that every input has exactly one pair of indices i and j that satisfy the condition.</p>
      <p>Return the answer with the smaller index first.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: nums = [3,4,5,6], target = 7
Output: [0,1]</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Two Sum</div>
      <ul>
        <li>Consider what value you need to find for each number in the array</li>
        <li>Can you use a hash map to store values you've already seen?</li>
        <li>For each number, what is its complement to reach the target?</li>
        <li>Are there any edge cases to consider?</li>
        <li>How can you ensure you're not using the same element twice?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Create a hash map to store values and their indices
2. First pass: Populate the hash map with all numbers and their indices
3. Second pass: For each number in the array:
   a. Calculate the complement (target - current number)
   b. Check if the complement exists in the hash map
   c. Make sure the complement isn't the same index as the current number
   d. If found, return the indices of the current number and its complement</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indices = {}  # val -> index

        for i, n in enumerate(nums):
            indices[n] = i

        for i, n in enumerate(nums):
            diff = target - n
            if diff in indices and indices[diff] != i:
                return [i, indices[diff]]</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    method: "HASH MAP",
    mnemonicsContent: `
      <ul>
        <li><strong>Complement Finding:</strong> For each number, find its complement (target - number).</li>
        <li><strong>Two-Pass Approach:</strong> First store all numbers in a hash map, then look for complements.</li>
        <li><strong>Key-Value Strategy:</strong> Store values as keys and indices as values for quick lookup.</li>
        <li><strong>Same Index Check:</strong> Remember to check that you're not using the same array element twice.</li>
        <li><strong>Think Hash Map:</strong> When you need to find pairs that sum to a target, hash maps are often the solution.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Group Anagrams",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Group Anagrams</div>
      <p>Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.</p>
      <p>An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Group Anagrams</div>
      <ul>
        <li>How can you identify that two strings are anagrams of each other?</li>
        <li>Consider using a hash map to group strings</li>
        <li>What could be used as a key to identify all anagrams of the same group?</li>
        <li>Would sorting the characters of each string help?</li>
        <li>Can you use character counts instead of sorting?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Create a hash map to group anagrams (key: character count, value: list of strings)
2. For each string in the input array:
   a. Create a count array of size 26 for lowercase letters
   b. Count the frequency of each character in the string
   c. Convert the count array to a tuple to use as a key
   d. Add the string to the list of strings for this key
3. Return all the grouped lists of anagrams</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(m*n)</span>
        <span class="complexity space">Space: O(m)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            res[tuple(count)].append(s)
        return list(res.values())</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(m*n)</span>
        <span class="complexity space">Space: O(m)</span>
      </div>
    `,
    method: "HASH TABLE",
    mnemonicsContent: `
      <ul>
        <li><strong>Anagram Identifier:</strong> Character counts uniquely identify anagrams.</li>
        <li><strong>Frequency Fingerprint:</strong> Use a 26-element array as a "fingerprint" for each word.</li>
        <li><strong>Tuple as Key:</strong> Lists aren't hashable, so convert to tuple for dictionary keys.</li>
        <li><strong>Group by Key:</strong> Words with identical character counts get grouped together.</li>
        <li><strong>Default Collections:</strong> defaultdict(list) automatically creates empty lists for new keys.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Top K Frequent Elements",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Top K Frequent Elements</div>
      <p>Given an integer array nums and an integer k, return the k most frequent elements within the array.</p>
      <p>The test cases are generated such that the answer is always unique.</p>
      <p>You may return the output in any order.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Top K Frequent Elements</div>
      <ul>
        <li>How can you count the frequency of each element?</li>
        <li>After counting, how do you find the top k?</li>
        <li>Consider using a bucket sort approach</li>
        <li>What data structure can map numbers to their frequencies?</li>
        <li>Can you avoid using a sorting algorithm?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Count the frequency of each number using a hash map
2. Create buckets (lists) for each possible frequency (0 to n)
3. Place numbers in their frequency bucket
4. Start from the highest frequency bucket and collect numbers
5. Return once k numbers have been collected</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for num in nums:
            count[num] = 1 + count.get(num, 0)
        for num, cnt in count.items():
            freq[cnt].append(num)
        
        res = []
        for i in range(len(freq) - 1, 0, -1):
            for num in freq[i]:
                res.append(num)
                if len(res) == k:
                    return res</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    method: "BUCKET SORT",
    mnemonicsContent: `
      <ul>
        <li><strong>Count First:</strong> Always start by counting frequencies with a hash map.</li>
        <li><strong>Bucket Organization:</strong> Create buckets where the index is the frequency.</li>
        <li><strong>Reverse Traversal:</strong> Start from highest frequency bucket to find top elements.</li>
        <li><strong>Linear Time:</strong> Bucket sort achieves O(n) time without comparison-based sorting.</li>
        <li><strong>Early Exit:</strong> Return as soon as you collect k elements.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Encode and Decode Strings",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Encode and Decode Strings</div>
      <p>Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.</p>
      <p>Please implement encode and decode</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Encode and Decode Strings</div>
      <ul>
        <li>How can you separate strings so you can identify them later?</li>
        <li>Consider using a delimiter, but be careful about strings containing the delimiter</li>
        <li>What if you include the length of each string before the string itself?</li>
        <li>Think about a format like: [length]#[string]</li>
        <li>How will you parse the encoded string during decoding?</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
Encode:
1. For each string in the list:
   a. Append the length of the string, followed by a delimiter (#)
   b. Append the string itself
2. Return the concatenated result

Decode:
1. Initialize an empty result list and a pointer i = 0
2. While i < length of encoded string:
   a. Find the delimiter (#) to get the length of the next string
   b. Extract the length value
   c. Extract the string using the length
   d. Add the string to result list
   e. Move pointer i to the next position
3. Return the result list</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        
        while i < len(s):
            j = i
            while s[j] != '#':
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
            
        return res</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(n)</span>
      </div>
    `,
    method: "LENGTH PREFIX",
    mnemonicsContent: `
      <ul>
        <li><strong>Length + Delimiter:</strong> Encode using format "length#string".</li>
        <li><strong>Two-Pointer Extraction:</strong> Use two pointers to parse the encoded string.</li>
        <li><strong>Find-Parse-Extract:</strong> Find the delimiter, parse the length, extract the substring.</li>
        <li><strong>Sequential Reading:</strong> Decode by reading one string at a time, moving forward.</li>
        <li><strong>Think Network Protocols:</strong> This encoding is similar to how data is transmitted in networks.</li>
      </ul>
    `
  },
  {
    id: 7,
    title: "Product of Array Except Self",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Product of Array Except Self</div>
      <p>Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].</p>
      <p>Each product is guaranteed to fit in a 32-bit integer.</p>
      <p>Follow-up: Could you solve it in O(n) time without using the division operation?</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: nums = [1,2,4,6]
Output: [48,24,12,8]</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Product of Array Except Self</div>
      <ul>
        <li>Consider the product of all numbers to the left of each index</li>
        <li>Consider the product of all numbers to the right of each index</li>
        <li>Can you use prefix and suffix products?</li>
        <li>How can you avoid using extra space?</li>
        <li>Try using the output array to store intermediate results</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Create a result array filled with 1s (same size as input)
2. Calculate prefix products:
   a. Initialize a variable to track the running product = 1
   b. Iterate from left to right
   c. Store the current prefix product in the result array
   d. Update the running product by multiplying with the current input value
3. Calculate suffix products and multiply with prefix products:
   a. Initialize a variable to track the running product = 1
   b. Iterate from right to left
   c. Multiply the current result value by the suffix product
   d. Update the running product by multiplying with the current input value
4. Return the result array</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(1)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * (len(nums))

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
        return res</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n)</span>
        <span class="complexity space">Space: O(1)</span>
      </div>
    `,
    method: "PREFIX & SUFFIX",
    mnemonicsContent: `
      <ul>
        <li><strong>Two-Pass Approach:</strong> First calculate prefix products, then suffix products.</li>
        <li><strong>Running Product:</strong> Maintain a running product as you iterate through the array.</li>
        <li><strong>Output Array Reuse:</strong> Use the output array to store intermediate results (prefix products).</li>
        <li><strong>Multiplication Splitting:</strong> The product of all except self = (product of all before) * (product of all after).</li>
        <li><strong>No Division Needed:</strong> Solve without using division by splitting the calculation.</li>
      </ul>
    `
  },
  {
    id: 8,
    title: "Valid Sudoku",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Valid Sudoku</div>
      <p>You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:</p>
      <ul>
        <li>Each row must contain the digits 1-9 without duplicates.</li>
        <li>Each column must contain the digits 1-9 without duplicates.</li>
        <li>Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.</li>
      </ul>
      <p>Return true if the Sudoku board is valid, otherwise return false.</p>
      <p>Note: A board does not need to be full or be solvable to be valid.</p>
      <br>
      <pre>
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Valid Sudoku</div>
      <ul>
        <li>Consider checking rows, columns, and 3x3 boxes separately</li>
        <li>How can you detect if a number appears more than once?</li>
        <li>Think about using sets to track seen numbers</li>
        <li>What's an efficient way to map a cell to its 3x3 box?</li>
        <li>Remember to skip empty cells ('.')</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Check each row:
   a. For each row, create a set to track seen digits
   b. Iterate through each cell in the row
   c. Skip empty cells
   d. If a digit is already in the set, return False
   e. Otherwise, add the digit to the set
2. Check each column (similar to rows)
3. Check each 3x3 box:
   a. For each of the 9 boxes, create a set
   b. Map each cell to its corresponding box
   c. Skip empty cells
   d. Check for duplicates using the set
4. If all checks pass, return True</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n²)</span>
        <span class="complexity space">Space: O(n²)</span>
      </div>
    `,
    codeContent: `
      <div class="card-title">Optimized Implementation</div>
      <pre>
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(9):
            seen = set()
            for i in range(9):
                if board[row][i] == ".": 
                    continue
                if board[row][i] in seen:
                    return False
                seen.add(board[row][i])
        
        for col in range(9):
            seen = set()
            for i in range(9):
                if board[i][col] == ".":
                    continue
                if board[i][col] in seen:
                    return False
                seen.add(board[i][col])
            
        for square in range(9):
            seen = set()
            for i in range(3):
                for j in range(3):
                    row = (square//3) * 3 + i
                    col = (square % 3) * 3 + j
                    if board[row][col] == ".":
                        continue
                    if board[row][col] in seen:
                        return False
                    seen.add(board[row][col])
        return True</pre>
      <div style="margin-top: 20px;">
        <span class="complexity time">Time: O(n²)</span>
        <span class="complexity space">Space: O(n²)</span>
      </div>
    `,
    method: "HASH SET",
    mnemonicsContent: `
      <ul>
        <li><strong>Three Separate Checks:</strong> Validate rows, columns, and 3x3 boxes independently.</li>
        <li><strong>Set-Based Validation:</strong> Use hash sets to detect duplicates in each group.</li>
        <li><strong>Box Indexing Formula:</strong> (square//3)*3 + i for row, (square%3)*3 + j for column.</li>
        <li><strong>Empty Cell Skipping:</strong> Always skip cells containing "." before checking.</li>
        <li><strong>Early Return:</strong> As soon as any invalid condition is found, return False.</li>
      </ul>
    `
  },
  {
    id: 9,
    title: "Longest Consecutive Sequence",
    category: "Arrays & Hashing",
    questionContent: `
      <div class="card-title">Longest Consecutive Sequence</div>
      <p>Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.</p>
      <p>A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.</p>
      <p>You must write an algorithm that runs in O(n) time.</p>
      <br>
      <p><strong>Example 1:</strong></p>
      <pre>
Input: nums = [2,20,4,10,3,4,5]
Output: 4</pre>
    `,
    hintContent: `
      <div class="card-title">Hints for Longest Consecutive Sequence</div>
      <ul>
        <li>How can you efficiently find if a number is part of a sequence?</li>
        <li>Consider using a set for O(1) lookups</li>
        <li>When should you start counting a sequence?</li>
        <li>Is there a way to avoid duplicate work?</li>
        <li>Think about finding the start of each sequence</li>
      </ul>
    `,
    blueprintContent: `
      <div class="card-title">Solution Blueprint</div>
      <pre>
1. Create a set from the input array for O(1) lookups
2. Initialize a variable to track the longest sequence found
3. For each number in the set:
   a. Check if it's the start of a sequence (num-1 is not in the set)
   b. If it's a start, count consecutive numbers (num+1, num+2, etc.)
   c. Update the longest sequence if the current one is longer
4. Return the length of the longest sequence found
