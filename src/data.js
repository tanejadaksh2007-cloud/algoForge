// ─── DSA TOPICS DATA ───────────────────────────────────────────────────────
// Structured DSA interview preparation roadmap with in-depth concept theory,
// time/space complexities, and key algorithmic patterns for each problem.

export const TOPICS = [
  {
    id: "arrays",
    name: "Arrays & Strings",
    icon: "▦",
    prereq: null,
    why: "Foundation of everything. Most interview questions involve arrays in some form — master this first.",
    sections: [
      {
        title: "Core mechanics",
        questions: [
          {
            name: "Two Sum",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/two-sum/",
            concept: "Hash map for O(n) lookup. For each element, check if complement exists in map. Key pattern: store index alongside value.",
            theory: "Brute force checks all pairs in O(n²). By maintaining a hash map of seen values mapped to their indices, we can check in O(1) time whether the exact complement (target - nums[i]) has already been visited in the prefix. This trades O(n) space for an optimal O(n) linear time scan.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Hash Map Complement Lookup",
            companies: ["Google","Amazon","Meta","Apple","Microsoft"]
          },
          {
            name: "Best Time to Buy & Sell Stock",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            concept: "Track running minimum and maximum profit in one pass. No nested loops needed.",
            theory: "Greedy one-pass invariant: to maximize profit on day i, you must have purchased at the absolute minimum price seen in days 0..i-1. Maintain a single `minPrice` variable and update `maxProfit = max(maxProfit, price - minPrice)` dynamically.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Greedy Running Minimum",
            companies: ["Amazon","Meta","Google","Bloomberg"]
          },
          {
            name: "Contains Duplicate",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/contains-duplicate/",
            concept: "Hash set: add elements one by one, return true if element already exists.",
            theory: "A hash set computes an element's bucket in O(1) average time via its hash code. If an insertion collides with an identical item, we terminate early with true. Alternatively, sorting yields O(n log n) time with O(1) auxiliary space.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Hash Set Membership",
            companies: ["Amazon","Apple","Microsoft","Google"]
          },
          {
            name: "Maximum Subarray (Kadane's)",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/maximum-subarray/",
            concept: "dp[i] = max(nums[i], dp[i-1] + nums[i]). If previous sum is negative, restart from current element.",
            theory: "Kadane's Algorithm leverages optimal substructure: the maximum contiguous subarray ending at index i either extends the subarray ending at i-1 or starts anew at i. If the running sum becomes negative, adding it to subsequent elements will only decrease their sum, so we reset the sum to 0.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Kadane's Dynamic Programming",
            companies: ["Amazon", "Microsoft", "Google", "Apple", "LinkedIn"]
          },
          {
            name: "Product of Array Except Self",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/product-of-array-except-self/",
            concept: "Two-pass prefix+suffix product. First pass: prefix products. Second: multiply by suffix running product. No division needed.",
            theory: "Without division, any element at index i equals the product of all elements to its left multiplied by all elements to its right. We compute prefix products into the output array in pass 1, then traverse backwards in pass 2 multiplying by a running suffix product accumulator.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1) extra",
            keyPattern: "Prefix & Suffix Accumulation",
            companies: ["Amazon","Meta","Apple","Microsoft","Google"]
          }
        ]
      },
      {
        title: "Two pointer & sliding window",
        questions: [
          {
            name: "Longest Substring Without Repeating",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            concept: "Sliding window + hash map storing last seen index. Move left pointer to lastSeen[char]+1 when duplicate found.",
            theory: "Dynamic sliding window invariant: the window [left, right] always contains distinct characters. As the right pointer advances, if `s[right]` was previously seen within the current window, jump `left` to `max(left, lastSeen[char] + 1)` in O(1) without shrinking incrementally.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(min(n, m))",
            keyPattern: "Sliding Window with Index Map",
            companies: ["Amazon","Microsoft","Google","Meta","Bloomberg"]
          },
          {
            name: "3Sum",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/3sum/",
            concept: "Sort first. Fix one element, use two pointers from both ends. Skip duplicates to avoid repeated triplets.",
            theory: "Sorting enables two-pointer convergence. Fix the first element nums[i]. The remaining problem is Two Sum II: finding two elements in the remaining suffix that sum to `-nums[i]`. If `sum < target`, advance left; if `sum > target`, decrement right. Skip adjacent identical elements to guarantee uniqueness.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1) auxiliary",
            keyPattern: "Sorted Two-Pointer Convergence",
            companies: ["Meta","Amazon","Google","Microsoft","Apple"]
          },
          {
            name: "Container With Most Water",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/container-with-most-water/",
            concept: "Two pointer: always move the shorter side inward — moving the taller side can never increase area.",
            theory: "The area is bounded by `min(height[left], height[right]) * (right - left)`. Moving the pointer at the taller line can only decrease width while being bounded by the same or smaller height, meaning it can never yield a larger area. Thus, greedily moving the shorter pointer inward is optimal.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Greedy Two-Pointer Shrink",
            companies: ["Amazon","Google","Meta","Adobe"]
          },
          {
            name: "Minimum Window Substring",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/minimum-window-substring/",
            concept: "Sliding window with character frequency matching. Expand right, shrink left only when window is valid. Track 'have' vs 'need' counts.",
            theory: "Maintain frequency maps of required and current window characters. Track matched unique characters (`have == need`). Expand `right` to satisfy validity, then greedily shrink `left` as much as possible while maintaining validity to capture the local minimum window length.",
            timeComplexity: "O(m + n)",
            spaceComplexity: "O(1) alphabet size",
            keyPattern: "Sliding Window Expansion & Contraction",
            companies: ["Meta","Amazon","Google","Uber","Microsoft"]
          },
          {
            name: "Trapping Rain Water",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/trapping-rain-water/",
            concept: "Two pointer: maintain maxLeft and maxRight. Water at index i = min(maxL, maxR) - height[i]. Move the lower-max pointer inward.",
            theory: "Water level at index i is dictated by `min(maxLeft, maxRight) - height[i]`. With two pointers starting at ends, if `maxLeft < maxRight`, the water capacity at the left pointer is strictly bottlenecked by `maxLeft` regardless of future heights on the right. Hence, we can safely compute trapped water and advance left.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Two-Pointer Invariant Bottleneck",
            companies: ["Google","Amazon","Meta","Goldman Sachs"]
          }
        ]
      },
      {
        title: "Mastery check",
        questions: [
          {
            name: "Rotate Array",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/rotate-array/",
            concept: "Reverse trick: reverse entire array, reverse first k elements, reverse remaining. O(1) space.",
            theory: "Rotating array by k positions shifts the suffix of length k to the front. By reversing the entire array, the desired elements move to the front but in inverted order. Reversing the first k elements and then the remaining n-k elements restores their original relative order with zero auxiliary memory.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Array 3-Step Inversion",
            companies: ["Amazon","Microsoft","Google"]
          },
          {
            name: "Find Minimum in Rotated Sorted Array",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            concept: "Binary search: if mid > right, minimum is in right half. Otherwise in left half including mid.",
            theory: "In a rotated sorted array without duplicates, one half is strictly sorted while the other contains the inflection point (minimum element). Compare `nums[mid]` with `nums[right]`: if `nums[mid] > nums[right]`, the pivot must lie strictly in the right half (`lo = mid + 1`); otherwise it lies in the left half including mid (`hi = mid`).",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            keyPattern: "Modified Binary Search",
            companies: ["Amazon","Meta","Microsoft"]
          }
        ]
      }
    ]
  },
  {
    id: "hashing",
    name: "Hashing",
    icon: "⬡",
    prereq: "arrays",
    why: "Reduces O(n²) brute force to O(n). Almost every optimised solution uses a hash map or set.",
    sections: [
      {
        title: "Core mechanics",
        questions: [
          {
            name: "Valid Anagram",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/valid-anagram/",
            concept: "Character frequency count. Two strings are anagrams if all 26 character counts match.",
            theory: "Two strings are anagrams if and only if their multiset of characters is identical. Using a fixed-size 26-element array avoids hash collisions and dynamic allocation overhead. Increment counts for string s, decrement for t, and verify all buckets return to zero.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1) alphabet size",
            keyPattern: "Fixed Array Frequency Counter",
            companies: ["Google","Amazon","Bloomberg"]
          },
          {
            name: "Group Anagrams",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/group-anagrams/",
            concept: "Use sorted word as hash key. All anagrams share the same sorted representation.",
            theory: "An equivalence relation can be represented by a canonical key. Sorting each string in O(k log k) or building a 26-element count tuple in O(k) produces an identical signature for all mutual anagrams. The signature serves as the key in a hash map mapping to grouped lists.",
            timeComplexity: "O(n · k log k)",
            spaceComplexity: "O(n · k)",
            keyPattern: "Canonical Hash Key Normalization",
            companies: ["Amazon","Meta","Google","Microsoft","Apple"]
          },
          {
            name: "Top K Frequent Elements",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/top-k-frequent-elements/",
            concept: "Frequency map + bucket sort by frequency. Bucket index = frequency, collect from top.",
            theory: "After counting frequencies in O(n), sorting takes O(n log n) and a min-heap takes O(n log k). Bucket sort achieves optimal linear time by using an array of lists where index represents frequency (bounded between 0 and n). Iterating backwards from bucket n collects top k elements in O(n).",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Frequency Bucket Sort",
            companies: ["Amazon","Meta","Google","Uber"]
          },
          {
            name: "Subarray Sum Equals K",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/",
            concept: "Prefix sum + map. count[prefixSum - k] = number of subarrays ending here with sum k.",
            theory: "Any contiguous subarray sum `sum(i..j)` equals `prefix[j] - prefix[i-1]`. Rearranging `prefix[j] - prefix[i-1] = k` gives `prefix[i-1] = prefix[j] - k`. By recording prefix sum frequencies in a hash map as we iterate, each step in O(1) adds the count of earlier prefixes that form valid subarrays ending at the current index.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Prefix Sum Complement Counting",
            companies: ["Meta","Google","Amazon","Microsoft"]
          }
        ]
      },
      {
        title: "Design",
        questions: [
          {
            name: "Design HashMap",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/design-hashmap/",
            concept: "Array of linked lists for chaining. Hash function: key % capacity. Resize at high load factor.",
            theory: "Collision resolution via separate chaining: an array of buckets where each bucket holds a linked list or dynamic buffer. A hash function `hash(key) = key % capacity` maps integers to bucket indices. Good prime capacities and dynamic rehashing keep bucket chain lengths near O(1).",
            timeComplexity: "O(1) average",
            spaceComplexity: "O(n)",
            keyPattern: "Separate Chaining Hash Table",
            companies: ["Amazon","Microsoft","Google","Goldman Sachs"]
          },
          {
            name: "LRU Cache",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/lru-cache/",
            concept: "Doubly linked list + hash map. O(1) get and put. Dummy head/tail simplify edge cases.",
            theory: "Combines two data structures: a Hash Map for O(1) key-to-node lookup and a Doubly Linked List for O(1) node removal and insertion at the head. On access (`get` or `put`), move the node to the head (most recently used). When capacity is exceeded, evict `tail.prev` in O(1).",
            timeComplexity: "O(1) all operations",
            spaceComplexity: "O(capacity)",
            keyPattern: "Hash Map + Doubly Linked List",
            companies: ["Amazon","Google","Meta","Microsoft","Apple","Netflix"]
          },
          {
            name: "Two Sum II (sorted array)",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            concept: "Two pointers: if sum > target move right left, if sum < target move left right.",
            theory: "Because the array is sorted, `nums[left] + nums[right]` has monotonic behavior: incrementing `left` strictly increases the sum, and decrementing `right` strictly decreases the sum. This guarantees that shrinking the interval eliminates candidate pairs that can never equal the target.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Monotonic Two-Pointer Search",
            companies: ["Amazon","Google","Bloomberg"]
          }
        ]
      }
    ]
  },
  {
    id: "stacks",
    name: "Stacks",
    icon: "⬆",
    prereq: "arrays",
    why: "Essential for parsing, undo operations, expression evaluation, and monotonic problems.",
    sections: [
      {
        title: "Core mechanics",
        questions: [
          {
            name: "Valid Parentheses",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/valid-parentheses/",
            concept: "Push open brackets. On close bracket, pop and check match. Stack empty at end = valid.",
            theory: "A grammar of nested brackets adheres strictly to Last-In-First-Out (LIFO) semantics. Every opening bracket must match the most recently encountered unclosed opening bracket. If a closing bracket appears with an empty stack or mismatched top, the sequence is immediately invalid.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "LIFO Bracket Matching",
            companies: ["Amazon","Meta","Google","Microsoft","Bloomberg"]
          },
          {
            name: "Min Stack",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/min-stack/",
            concept: "Parallel stack tracking minimums. On push: append min(val, current_min) to min_stack.",
            theory: "Tracking the minimum in O(1) without scanning requires preserving the historical minimum at every stack depth. We push to a primary stack and concurrently push the new minimum `min(val, minStack.top())` onto a secondary stack, ensuring `pop()` automatically restores the previous minimum.",
            timeComplexity: "O(1) all operations",
            spaceComplexity: "O(n)",
            keyPattern: "State-Paired Auxiliary Stack",
            companies: ["Amazon","Bloomberg","Microsoft","Google"]
          },
          {
            name: "Evaluate Reverse Polish Notation",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
            concept: "Push numbers. On operator, pop two operands and push result. Watch division truncation direction.",
            theory: "In postfix notation, operators immediately follow their operands. Processing left-to-right: operands are pushed onto the stack. When an operator is met, pop the right operand then the left operand, compute `left op right`, and push the result back.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Postfix Expression Stack Machine",
            companies: ["Amazon","LinkedIn","Google"]
          },
          {
            name: "Daily Temperatures",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/daily-temperatures/",
            concept: "Monotonic decreasing stack of indices. Pop and compute answer when warmer temperature found.",
            theory: "Maintain a monotonic decreasing stack of indices whose next warmer day has not yet been discovered. When encountering temperature `T[i] > T[stack.top()]`, the current day `i` is the closest warmer day for all elements smaller than it on the stack. Pop them and record `i - popped_idx`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Monotonic Decreasing Stack",
            companies: ["Meta","Amazon","Google"]
          }
        ]
      },
      {
        title: "Monotonic stack",
        questions: [
          {
            name: "Next Greater Element I",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/next-greater-element-i/",
            concept: "Monotonic stack on nums2, store results in hash map, lookup for nums1 elements.",
            theory: "Use a monotonic decreasing stack across `nums2`. When an element exceeds `stack.top()`, map `top -> current` in a hash map. After the pass, unresolved elements in the stack map to -1. Finally, query the map for each element of `nums1` in O(1).",
            timeComplexity: "O(n + m)",
            spaceComplexity: "O(m)",
            keyPattern: "Monotonic Stack with Hash Mapping",
            companies: ["Amazon","Google","Bloomberg"]
          },
          {
            name: "Car Fleet",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/car-fleet/",
            concept: "Sort by position desc. Compute time to target. If a car catches up to the one ahead, same fleet (pop).",
            theory: "Cars cannot pass one another. Sort cars in descending order of starting position (closest to target first). Compute time to arrival: `time = (target - pos) / speed`. If a car behind arrives earlier or at the same time as the fleet ahead, it merges into that fleet; otherwise, it forms a new fleet.",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            keyPattern: "Sorted Monotonic Time Reduction",
            companies: ["Google","Amazon"]
          },
          {
            name: "Largest Rectangle in Histogram",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            concept: "Monotonic increasing stack of indices. Pop when shorter bar found, compute area with popped height and distance to new top.",
            theory: "Every bar could be the limiting minimum height of a maximal rectangle extending left and right. A monotonic increasing stack stores indices. When a shorter bar is encountered, it defines the right boundary for the taller popped bar, while the remaining stack top defines the left boundary.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Monotonic Increasing Boundary Stack",
            companies: ["Amazon","Google","Meta","Uber"]
          },
          {
            name: "Decode String",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/decode-string/",
            concept: "Two stacks: one for repeat counts, one for built strings. Push on '[', build and multiply on ']'.",
            theory: "Handles nested repeats hierarchically. Use a count stack and a string stack. When encountering '[', push the current string buffer and multiplier, resetting both. When ']', pop the previous string and count, repeating the current buffer and appending it.",
            timeComplexity: "O(maxK · n)",
            spaceComplexity: "O(n)",
            keyPattern: "Nested Context Frame Stacks",
            companies: ["Google","Bloomberg","Amazon"]
          }
        ]
      },
      {
        title: "Mastery check",
        questions: [
          {
            name: "Asteroid Collision",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/asteroid-collision/",
            concept: "Positive asteroids always pushed. Negative collides with stack top. Resolve until stable or add.",
            theory: "Collisions only occur when a moving-left asteroid (negative) meets a moving-right asteroid (positive) currently on top of the stack. Simulate collisions using stack pops until either the incoming asteroid explodes, destroys the top, or is added.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Directional Collision Stack",
            companies: ["Amazon","DoorDash","Google"]
          },
          {
            name: "Remove K Digits",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/remove-k-digits/",
            concept: "Monotonic increasing stack. When current digit < top and k > 0, pop. Handle leading zeros and leftover k.",
            theory: "Greedy principle: more significant digits (leftmost) have higher positional weight. If a digit is followed by a smaller digit, deleting the larger digit yields a smaller number. Maintain a monotonic increasing stack, popping whenever `current < stack.top()` and `k > 0`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Greedy Monotonic Digit Reduction",
            companies: ["Amazon","Google","Microsoft"]
          }
        ]
      }
    ]
  },
  {
    id: "queues",
    name: "Queues & Deques",
    icon: "↔",
    prereq: "stacks",
    why: "Core for BFS, level-order traversal, scheduling, and sliding window maximum.",
    sections: [
      {
        title: "Core mechanics",
        questions: [
          {
            name: "Implement Queue using Stacks",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/",
            concept: "Two stacks: inbox and outbox. Transfer inbox→outbox only when outbox empty. Amortised O(1).",
            theory: "Reversing a reversed sequence restores original First-In-First-Out (FIFO) ordering. By pushing to an `inStack` and only transferring elements to `outStack` when `outStack` is completely empty, each element is moved at most twice across its lifecycle, guaranteeing amortized O(1) operations.",
            timeComplexity: "O(1) amortized",
            spaceComplexity: "O(n)",
            keyPattern: "Dual-Stack Amortized FIFO",
            companies: ["Amazon","Microsoft","Bloomberg"]
          },
          {
            name: "Implement Stack using Queues",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/implement-stack-using-queues/",
            concept: "On every push, rotate queue so new element is at front. O(n) push, O(1) pop.",
            theory: "To simulate LIFO using a single FIFO queue, when pushing a new element, enqueue it and immediately dequeue and re-enqueue all previous `size - 1` elements behind it. This maintains the invariant that the most recently pushed element is always at the queue head.",
            timeComplexity: "O(n) push, O(1) pop",
            spaceComplexity: "O(n)",
            keyPattern: "Queue Rotation Invariant",
            companies: ["Amazon","Bloomberg"]
          },
          {
            name: "Number of Recent Calls",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/number-of-recent-calls/",
            concept: "Deque as sliding window. Remove calls with timestamp < t-3000. Return deque size.",
            theory: "Since incoming timestamps are strictly increasing, a queue models the sliding time window `[t - 3000, t]`. Enqueue the current ping, then continuously dequeue outdated timestamps strictly less than `t - 3000`. The remaining queue size is the answer.",
            timeComplexity: "O(1) amortized per ping",
            spaceComplexity: "O(W) window size",
            keyPattern: "Time-Window Sliding Deque",
            companies: ["Google","Amazon"]
          }
        ]
      },
      {
        title: "BFS patterns",
        questions: [
          {
            name: "Binary Tree Level Order Traversal",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            concept: "BFS with queue. Snapshot queue.size() at start of each level loop — that's your level boundary.",
            theory: "Breadth-First Search visits nodes level-by-level in increasing distance from root. By snapshotting `levelSize = queue.length` before processing, we can iterate exactly `levelSize` times to dequeue all nodes belonging to the current depth and enqueue their children for the next depth.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(w) maximum tree width",
            keyPattern: "Level-Boundary Snapshot BFS",
            companies: ["Amazon","Meta","Microsoft","Google"]
          },
          {
            name: "Rotting Oranges",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/rotting-oranges/",
            concept: "Multi-source BFS: seed queue with ALL rotten oranges first. Spread in waves, count minutes.",
            theory: "Rotting spreads concurrently from all initially rotten oranges. In multi-source BFS, initialize the queue with all source coordinates simultaneously with `time = 0`. Each BFS wave expands 4-directionally, converting adjacent fresh oranges and advancing the timer by 1 minute.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(m · n)",
            keyPattern: "Multi-Source Simultaneous BFS",
            companies: ["Amazon","Microsoft","Google","Uber"]
          },
          {
            name: "Walls and Gates",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/walls-and-gates/",
            concept: "Multi-source BFS from all gates simultaneously. Each cell gets shortest distance to any gate.",
            theory: "Running BFS from each room takes O(k · m · n). Inverting the perspective by enqueuing all gates (distance 0) concurrently allows the first arrival at any empty room to be mathematically guaranteed as its shortest distance to ANY gate, updating the grid in a single linear pass.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(m · n)",
            keyPattern: "Reverse Multi-Source Floodfill",
            companies: ["Meta","Google","Amazon"]
          },
          {
            name: "Sliding Window Maximum",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/sliding-window-maximum/",
            concept: "Monotonic deque of indices (decreasing values). Remove out-of-window indices from front, smaller values from back.",
            theory: "A monotonic deque stores indices with strictly decreasing values. Before inserting `nums[i]`, remove all smaller elements from the back (they can never be the maximum since `nums[i]` is both larger and survives longer). Remove out-of-bounds indices from the front. The head is always the maximum.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(k)",
            keyPattern: "Monotonic Decreasing Deque",
            companies: ["Google","Amazon","Meta","Uber"]
          }
        ]
      }
    ]
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    icon: "⟶",
    prereq: "arrays",
    why: "Tests pointer manipulation. Teaches memory concepts that matter in systems design.",
    sections: [
      {
        title: "Core mechanics",
        questions: [
          {
            name: "Reverse Linked List",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/reverse-linked-list/",
            concept: "Three pointers: prev=None, curr=head. Save next, point curr→prev, advance both. Return prev.",
            theory: "Reversing pointers in place requires caching `curr.next` before overwriting it. Maintain three pointers: `prev`, `curr`, and `temp = curr.next`. Set `curr.next = prev`, then slide `prev = curr` and `curr = temp` until `curr` is null. `prev` becomes the new head.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Iterative 3-Pointer Inversion",
            companies: ["Amazon","Microsoft","Google","Meta","Apple"]
          },
          {
            name: "Merge Two Sorted Lists",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/",
            concept: "Dummy head simplifies edge cases. Compare heads, advance the smaller one. Attach remainder.",
            theory: "A dummy pre-head node eliminates special branch logic for setting the initial list head. Compare the values at `l1` and `l2`, link `tail.next` to the smaller node, and advance that list's pointer. When one list terminates, splice the remainder of the other list directly in O(1).",
            timeComplexity: "O(n + m)",
            spaceComplexity: "O(1)",
            keyPattern: "Sentinel Dummy Node Splice",
            companies: ["Amazon","Microsoft","Google","Apple"]
          },
          {
            name: "Linked List Cycle",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/linked-list-cycle/",
            concept: "Floyd's algorithm: slow moves 1, fast moves 2. They meet only if cycle exists.",
            theory: "Floyd's Tortoise and Hare algorithm: `slow` advances 1 step and `fast` advances 2 steps. If no cycle exists, `fast` reaches null in O(n). If a cycle of length C exists, `fast` enters the cycle and closes the distance to `slow` by 1 step on every iteration, guaranteeing a collision within C steps.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Floyd's Cycle Detection",
            companies: ["Amazon","Microsoft","Bloomberg","Google"]
          },
          {
            name: "Remove Nth Node From End",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            concept: "Two pointers n apart. When fast reaches end, slow.next is the target. Dummy head handles edge case.",
            theory: "Advance a `fast` pointer n + 1 steps ahead of `slow` (using a dummy head). When `fast` reaches null, `slow` is positioned precisely before the target node to be deleted. Execute `slow.next = slow.next.next` in O(1) without requiring a second pass to count length.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Fixed-Gap Two Pointers",
            companies: ["Amazon","Meta","Microsoft","Apple"]
          }
        ]
      },
      {
        title: "Advanced pointer work",
        questions: [
          {
            name: "Reorder List",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/reorder-list/",
            concept: "3 steps: find middle (slow/fast), reverse second half, merge alternating from both halves.",
            theory: "Deconstruct into 3 standard primitives: (1) Find middle using slow/fast pointers, (2) Reverse the second half in-place, (3) Interleave nodes alternating between the first half and the reversed second half. Modifies the list in-place with zero heap allocations.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Middle + Reverse + Interleave",
            companies: ["Amazon","Meta","Google"]
          },
          {
            name: "Copy List with Random Pointer",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/copy-list-with-random-pointer/",
            concept: "Hash map old→new nodes in pass 1. Wire next and random in pass 2.",
            theory: "Deep copying requires resolving arbitrary graph cycles introduced by random pointers. Pass 1 maps every original node to a newly instantiated clone node in a hash map. Pass 2 assigns `map[curr].next = map[curr.next]` and `map[curr].random = map[curr.random]`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Graph Node Hash Map Clone",
            companies: ["Amazon","Meta","Microsoft","Bloomberg"]
          },
          {
            name: "Find Duplicate Number",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/find-the-duplicate-number/",
            concept: "Floyd's cycle detection on values as pointers. Phase 1: find intersection. Phase 2: find cycle entry.",
            theory: "Map array indices to values as edges: `i -> nums[i]`. Because there are n + 1 integers in range [1, n], by the Pigeonhole Principle a duplicate value exists, creating a directed cycle. Find collision with Floyd's algorithm, then reset one pointer to index 0; advancing both by 1 step locates the cycle entrance.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Array-as-Graph Cycle Entrance",
            companies: ["Amazon","Google","Microsoft"]
          },
          {
            name: "Merge K Sorted Lists",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
            concept: "Min-heap: push head of each list. Pop minimum, push its next. Or divide & conquer: merge pairs.",
            theory: "Maintain a priority queue (min-heap) of size k containing the current head node of each non-empty list. Extracting the minimum takes O(log k). Once a node is popped, push its `next` into the heap. Total runtime is O(N log k) where N is total nodes across all k lists.",
            timeComplexity: "O(N log k)",
            spaceComplexity: "O(k)",
            keyPattern: "K-Way Min-Heap Merge",
            companies: ["Meta","Amazon","Google","Apple","Microsoft"]
          }
        ]
      }
    ]
  },
  {
    id: "binary-search",
    name: "Binary Search",
    icon: "⌖",
    prereq: "arrays",
    why: "O(log n) search on sorted data. Appears in 'find optimal value' problems disguised as non-search problems.",
    sections: [
      {
        title: "Core template",
        questions: [
          {
            name: "Binary Search",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/binary-search/",
            concept: "lo=0, hi=n-1. mid = lo+(hi-lo)//2 to avoid overflow. Adjust lo or hi based on comparison.",
            theory: "Halves the search space on each comparison by testing against the midpoint of a monotonic sequence. To prevent 32-bit integer overflow, compute `mid = lo + (hi - lo) / 2`. The loop terminates when `lo > hi`, guaranteeing an exact O(log n) logarithmic reduction.",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            keyPattern: "Standard Monotonic Binary Search",
            companies: ["Google","Amazon","Microsoft","Apple"]
          },
          {
            name: "Search a 2D Matrix",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/search-a-2d-matrix/",
            concept: "Treat m×n matrix as flat sorted array. Index to row/col: row=mid//n, col=mid%n.",
            theory: "A matrix where each row is sorted and the first element of each row exceeds the last element of the previous row is isomorphic to a 1D sorted array of length m · n. Map any 1D index `mid` to 2D coordinates via `row = mid / n` and `col = mid % n`.",
            timeComplexity: "O(log(m · n))",
            spaceComplexity: "O(1)",
            keyPattern: "Virtual 1D Coordinate Mapping",
            companies: ["Amazon","Microsoft","Meta","Google"]
          },
          {
            name: "Koko Eating Bananas",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/koko-eating-bananas/",
            concept: "Binary search on answer (speed k). Check feasibility: sum(ceil(pile/k)) <= h.",
            theory: "When searching for a minimal optimal threshold where a condition `f(k)` transitions monotonically from false to true (monotonic predicate), perform binary search on the answer range `[1, max(piles)]`. A helper function verifies in O(n) if eating speed k finishes within h hours.",
            timeComplexity: "O(n · log(max(piles)))",
            spaceComplexity: "O(1)",
            keyPattern: "Binary Search on Monotonic Predicate",
            companies: ["Google","Amazon","Meta"]
          },
          {
            name: "Search in Rotated Sorted Array",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            concept: "One half is always sorted. Check which half is sorted, decide which half target must be in.",
            theory: "For any midpoint in a rotated array, at least one half ([lo..mid] or [mid..hi]) is strictly sorted. Check if `nums[lo] <= nums[mid]` to determine if left is sorted. Then check if target lies within the sorted half's boundaries; if so, narrow search there; otherwise search the opposing half.",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            keyPattern: "Rotated Half-Partition Search",
            companies: ["Meta","Google","Amazon","Microsoft"]
          }
        ]
      },
      {
        title: "Advanced",
        questions: [
          {
            name: "Time Based Key-Value Store",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/time-based-key-value-store/",
            concept: "Binary search on timestamps for each key. Find rightmost timestamp <= given time.",
            theory: "Store an array of `(timestamp, value)` pairs for each key. Since timestamps arrive in strictly ascending order, the array is inherently sorted. When queried with timestamp t, execute binary search to locate the rightmost timestamp `mid <= t` (upper bound search).",
            timeComplexity: "O(log n) get, O(1) set",
            spaceComplexity: "O(total entries)",
            keyPattern: "Timestamp Lower/Upper Bound Search",
            companies: ["Google","Amazon","Netflix"]
          },
          {
            name: "Median of Two Sorted Arrays",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            concept: "Binary search on partition of smaller array. Ensure maxLeft1 <= minRight2 and maxLeft2 <= minRight1.",
            theory: "Partition both arrays such that the combined left half contains `(m + n + 1) / 2` elements. Binary search the cut position on the smaller array in O(log(min(m, n))). The partition is valid when `maxLeftA <= minRightB` and `maxLeftB <= minRightA`.",
            timeComplexity: "O(log(min(m, n)))",
            spaceComplexity: "O(1)",
            keyPattern: "Dual-Array Partition Binary Search",
            companies: ["Google","Microsoft","Amazon","Apple"]
          },
          {
            name: "Find Peak Element",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/find-peak-element/",
            concept: "If nums[mid] < nums[mid+1], peak is to the right. Otherwise to the left or at mid.",
            theory: "If `nums[mid] < nums[mid + 1]`, we are on an ascending slope, meaning a peak is guaranteed to exist to the right. If `nums[mid] > nums[mid + 1]`, a peak exists at mid or to the left. This binary search condition works even on completely unsorted data.",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            keyPattern: "Slope Invariant Binary Search",
            companies: ["Meta","Google","Amazon"]
          }
        ]
      }
    ]
  },
  {
    id: "trees",
    name: "Trees & BSTs",
    icon: "⬡",
    prereq: "linked-lists",
    why: "DFS, recursion, and tree DP are interview staples. Foundation for graphs.",
    sections: [
      {
        title: "Tree traversal",
        questions: [
          {
            name: "Invert Binary Tree",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/invert-binary-tree/",
            concept: "Swap left and right at every node recursively. One line in Python: root.left, root.right = invert(root.right), invert(root.left).",
            theory: "Recursive post-order traversal: base case is a null node returning null. Recursively invert the left and right subtrees, then swap the left and right child pointers at the current node. Every node is visited exactly once.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(h) call stack height",
            keyPattern: "Post-Order Tree Recursion",
            companies: ["Google","Amazon","Meta"]
          },
          {
            name: "Maximum Depth of Binary Tree",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            concept: "1 + max(depth(left), depth(right)). Base case: null → 0.",
            theory: "Divide-and-conquer recurrence: the maximum depth of a binary tree equals 1 plus the maximum between the depths of its left and right subtrees. Base case: null node returns depth 0.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(h)",
            keyPattern: "Depth-First Divide & Conquer",
            companies: ["Amazon","Google","Microsoft","LinkedIn"]
          },
          {
            name: "Diameter of Binary Tree",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/",
            concept: "At each node: candidate diameter = left_height + right_height. Track global max. Return height not diameter.",
            theory: "The longest path between any two nodes may or may not pass through the root. At every node, the longest path turning at that node is `left_depth + right_depth`. Update a global diameter tracker, but return `1 + max(left, right)` upwards so parents can build valid linear paths.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(h)",
            keyPattern: "Bottom-Up Subtree Aggregation",
            companies: ["Meta","Amazon","Google","Bloomberg"]
          },
          {
            name: "Binary Tree Level Order",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            concept: "BFS with queue. Snapshot size at level start. Process exactly that many nodes per level.",
            theory: "Standard queue-based BFS traversal. By capturing `levelSize = queue.size()` at the start of each while iteration, we group all nodes at the current depth into an array before processing their children.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(w) maximum level width",
            keyPattern: "Queue Breadth-First Level Search",
            companies: ["Amazon","Meta","Microsoft","Google"]
          },
          {
            name: "Path Sum II",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/path-sum-ii/",
            concept: "DFS with backtracking. Add node to path, recurse, pop on return. Record path at leaf when sum matches.",
            theory: "Depth-First Search with backtracking: append `node.val` to a running `path` list. At a leaf node where `targetSum == node.val`, push a deep copy of `path` to the result list. Backtrack by popping `node.val` before returning up the call stack to conserve memory.",
            timeComplexity: "O(n · h)",
            spaceComplexity: "O(h)",
            keyPattern: "DFS Backtracking Path Search",
            companies: ["Amazon","Bloomberg","Google"]
          }
        ]
      },
      {
        title: "BST properties",
        questions: [
          {
            name: "Validate Binary Search Tree",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/validate-binary-search-tree/",
            concept: "Pass min/max bounds down recursively. Each node must satisfy min < val < max. Don't just check parent.",
            theory: "Checking only parent-child relationships is insufficient (a right child in a left subtree could violate an ancestor's BST bound). Pass allowable bounds `(low, high)` down the recursive tree: for left child `(low, node.val)`, for right child `(node.val, high)`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(h)",
            keyPattern: "Top-Down Boundary Propagation",
            companies: ["Amazon","Meta","Microsoft","Bloomberg"]
          },
          {
            name: "Lowest Common Ancestor (BST)",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            concept: "If both p,q < root → go left. Both > root → go right. Otherwise current node is LCA.",
            theory: "Leverage BST ordering: if both target values p and q are strictly less than `root.val`, the split point must be in the left subtree. If both are strictly greater, it must be in the right subtree. The first node where p and q diverge (or equal the node) is their Lowest Common Ancestor.",
            timeComplexity: "O(h)",
            spaceComplexity: "O(1) iterative",
            keyPattern: "BST Directional Divergence",
            companies: ["Amazon","Meta","Google","Microsoft"]
          },
          {
            name: "Kth Smallest in BST",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            concept: "In-order traversal gives sorted order. Stop at kth element. Iterative with stack avoids full traversal.",
            theory: "An in-order traversal (Left -> Node -> Right) of any Binary Search Tree visits values in strictly non-decreasing sorted order. Implementing an iterative traversal using an explicit stack allows stopping early after exactly k steps without traversing the remainder of the tree.",
            timeComplexity: "O(h + k)",
            spaceComplexity: "O(h)",
            keyPattern: "In-Order Traversal with Early Exit",
            companies: ["Amazon","Google","Meta"]
          },
          {
            name: "Construct Tree from Pre+Inorder",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            concept: "Root = preorder[0]. Find root in inorder to determine left/right subtree sizes. Recurse.",
            theory: "Preorder's first element is always the current subtree's root. Locating this root in the inorder array splits it into left and right subtrees. Indexing inorder via a hash map allows determining left subtree size in O(1) and partitioning preorder recursively.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Dual-Traversal Subtree Partition",
            companies: ["Amazon","Microsoft","Google"]
          }
        ]
      },
      {
        title: "Mastery check",
        questions: [
          {
            name: "Binary Tree Maximum Path Sum",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            concept: "At each node: gain = val + max(0,left) + max(0,right). Update global max. Return val + max(0, max(left,right)) — can't branch upward.",
            theory: "Tree DP: compute maximum contribution of each subtree. If a child's contribution is negative, prune it (`max(0, gain)`). The maximum arch path through the current node is `val + leftGain + rightGain`. However, to extend a valid path to an ancestor, return only `val + max(leftGain, rightGain)`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(h)",
            keyPattern: "Post-Order Tree Dynamic Programming",
            companies: ["Meta","Google","Amazon"]
          },
          {
            name: "Serialize and Deserialize Tree",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            concept: "BFS or pre-order with null markers. Deserialize by reading markers back using queue.",
            theory: "Pre-order traversal with explicit sentinel tokens (e.g. '#') for null nodes encodes full structural topology into a flat comma-delimited string. Deserialization splits by comma into an iterator or queue; each recursive call consumes the head token to reconstruct root, left, and right.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            keyPattern: "Sentinel Pre-Order Serialization",
            companies: ["Meta","Amazon","Google","Uber","Microsoft"]
          }
        ]
      }
    ]
  },
  {
    id: "heaps",
    name: "Heaps & Priority Queues",
    icon: "△",
    prereq: "trees",
    why: "For 'top K' problems and anything needing dynamic min/max. Very frequent in interviews.",
    sections: [
      {
        title: "Core usage",
        questions: [
          {
            name: "Kth Largest Element in Array",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            concept: "Min-heap of size k. Push each element; if heap > k, pop. Heap top is kth largest.",
            theory: "A min-heap maintained at size k stores the k largest elements seen so far. The minimum of these k elements sits at the top. Any incoming element smaller than the top cannot belong to the top k; if larger, push and pop the smallest. After n elements, the root is the kth largest.",
            timeComplexity: "O(n log k)",
            spaceComplexity: "O(k)",
            keyPattern: "Bounded Min-Heap",
            companies: ["Meta","Amazon","Microsoft","Google"]
          },
          {
            name: "Last Stone Weight",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/last-stone-weight/",
            concept: "Max-heap. Smash two heaviest stones repeatedly. Push remainder if not equal.",
            theory: "Simulation of dynamic maximum extraction. By inserting all stone weights into a max-heap, extracting the two heaviest stones takes O(log n). If `y > x`, push `y - x` back into the heap. Repeat until at most one stone remains.",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            keyPattern: "Max-Heap Greedy Simulation",
            companies: ["Amazon","Google"]
          },
          {
            name: "K Closest Points to Origin",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/k-closest-points-to-origin/",
            concept: "Max-heap of size k on distances. Evict farthest when size exceeds k.",
            theory: "To find k smallest distances, maintain a max-heap of size k. As you iterate through points, if the heap exceeds size k, evict the farthest point from the root. When iteration completes, the heap holds the k closest points.",
            timeComplexity: "O(n log k)",
            spaceComplexity: "O(k)",
            keyPattern: "Inverted Max-Heap for K-Smallest",
            companies: ["Meta","Amazon","Google","Uber"]
          },
          {
            name: "Find Median from Data Stream",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/find-median-from-data-stream/",
            concept: "Two heaps: max-heap for lower half, min-heap for upper half. Balance sizes to keep median accessible.",
            theory: "Split dynamic stream into two halves: `small` (max-heap for lower half) and `large` (min-heap for upper half). Maintain the invariant that `small.size() == large.size()` or `small.size() == large.size() + 1`. The median is either `small.top()` or the average of both tops in O(1).",
            timeComplexity: "O(log n) addNum, O(1) findMedian",
            spaceComplexity: "O(n)",
            keyPattern: "Dual Balanced Heaps",
            companies: ["Google","Amazon","Apple","Microsoft"]
          }
        ]
      },
      {
        title: "Advanced",
        questions: [
          {
            name: "Task Scheduler",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/task-scheduler/",
            concept: "Max-heap by frequency. Greedy: always schedule most frequent available task. Fill cooldown with next best.",
            theory: "The minimum time is bounded by the most frequent task. If task A appears `maxFreq` times with cooldown n, it creates `(maxFreq - 1)` chunks of size `(n + 1)`. The total idle/busy slots required are `max((maxFreq - 1) * (n + 1) + countOfMaxTasks, tasks.length)`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1) alphabet size",
            keyPattern: "Greedy Frequency Slot Filling",
            companies: ["Meta","Amazon","Google"]
          },
          {
            name: "Merge K Sorted Lists (heap)",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
            concept: "Min-heap seeded with head of each list. Pop min, push its next pointer. O(N log k).",
            theory: "Seed a min-heap with the head pointer of each of the k lists. Repeatedly pop the smallest node, attach it to the merged list tail, and if `popped.next != null`, push `popped.next` into the heap. Guarantees optimal O(N log k) merge.",
            timeComplexity: "O(N log k)",
            spaceComplexity: "O(k)",
            keyPattern: "K-Way Priority Queue Merge",
            companies: ["Meta","Amazon","Google","Apple"]
          }
        ]
      }
    ]
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "◎",
    prereq: "trees",
    why: "Covers DFS, BFS, Union-Find, topological sort, Dijkstra — tested at every top company.",
    sections: [
      {
        title: "DFS & BFS on grids",
        questions: [
          {
            name: "Number of Islands",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/number-of-islands/",
            concept: "DFS flood-fill from each unvisited '1'. Mark '0' in-place to avoid revisiting.",
            theory: "Treat the 2D grid as an undirected graph where cells with '1' share edges with adjacent cells. Iterate through all cells: upon finding an unvisited '1', increment the island count and trigger a recursive DFS or BFS flood-fill to sink all connected land ('0' in-place).",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(m · n) recursion stack",
            keyPattern: "Connected Components Grid Flood-Fill",
            companies: ["Amazon","Google","Microsoft","Meta","Bloomberg"]
          },
          {
            name: "Max Area of Island",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/max-area-of-island/",
            concept: "DFS returning cell count. Track global max. Mark visited in-place.",
            theory: "Recursive DFS returns the size of the connected component. Base cases: out-of-bounds or cell is '0' returns 0. Otherwise, sink the cell (`grid[r][c] = 0`) and return `1 + dfs(up) + dfs(down) + dfs(left) + dfs(right)`. Update a global maximum area.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(m · n)",
            keyPattern: "Component Size Accumulation",
            companies: ["Amazon","Google","Meta"]
          },
          {
            name: "Pacific Atlantic Water Flow",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
            concept: "Reverse BFS from both coasts (cells water can flow from). Answer = intersection of two reachable sets.",
            theory: "Simulating flow from every cell to the ocean is O((m · n)²). Instead, reverse the problem: run multi-source BFS/DFS inward from the Pacific coast cells and Atlantic coast cells climbing uphill (`height[next] >= height[curr]`). Cells reachable from both oceans form the intersection.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(m · n)",
            keyPattern: "Reverse Ocean Inward Reachability",
            companies: ["Google","Amazon"]
          },
          {
            name: "Word Search",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/word-search/",
            concept: "DFS with backtracking on grid. Mark cell visited with '#', restore on return.",
            theory: "Backtracking DFS on a 2D matrix: match character `word[k]` at `(r, c)`. Temporarily mask `board[r][c] = '#'` to prevent self-intersecting loops in the same word path, recurse into 4 neighbors for `word[k + 1]`, and restore `board[r][c]` before returning.",
            timeComplexity: "O(m · n · 3^L) where L = word length",
            spaceComplexity: "O(L) recursion stack",
            keyPattern: "In-Place Grid Backtracking",
            companies: ["Amazon","Microsoft","Google","Bloomberg"]
          }
        ]
      },
      {
        title: "Topological sort & Union-Find",
        questions: [
          {
            name: "Course Schedule (Cycle Detection)",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/course-schedule/",
            concept: "DFS 3-state: 0=unvisited, 1=visiting, 2=done. Back edge (1→1) means cycle.",
            theory: "Course prerequisites form a directed graph. The schedule is possible if and only if the graph is a Directed Acyclic Graph (DAG). Use 3-color DFS: 0 (unvisited), 1 (currently in recursion stack), 2 (fully visited). Encounting a neighbor in state 1 indicates a back edge / cycle.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V + E)",
            keyPattern: "3-Color DFS Cycle Detection",
            companies: ["Amazon","Google","Meta","Microsoft"]
          },
          {
            name: "Course Schedule II",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/course-schedule-ii/",
            concept: "Topological sort via Kahn's BFS (in-degree array). Or DFS post-order, reverse result.",
            theory: "Kahn's Algorithm: compute in-degrees for all nodes. Seed a queue with nodes having `inDegree == 0` (no prereqs). Pop a course, append to ordering, and decrement in-degrees of its neighbors. Any neighbor whose in-degree hits 0 enters the queue. If ordering contains all V nodes, return it.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V + E)",
            keyPattern: "Kahn's In-Degree Topological Sort",
            companies: ["Google","Amazon","Meta"]
          },
          {
            name: "Number of Connected Components",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
            concept: "Union-Find with path compression. Each union reduces component count by 1 if different sets.",
            theory: "Disjoint Set Union (DSU): initialize n disjoint sets (components = n). For each edge `(u, v)`, find their set representatives `find(u)` and `find(v)` with path compression. If representatives differ, merge them (`union`) and decrement components by 1.",
            timeComplexity: "O(E · α(V)) near linear",
            spaceComplexity: "O(V)",
            keyPattern: "Disjoint Set Union (Union-Find)",
            companies: ["Amazon","Meta","Google"]
          },
          {
            name: "Redundant Connection",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/redundant-connection/",
            concept: "Union-Find: if both endpoints already in same set, this edge is redundant.",
            theory: "A tree with N nodes has exactly N - 1 edges and no cycles. An additional edge introduces a cycle. Iterate through edges: for edge `(u, v)`, if `find(u) == find(v)`, both vertices are already connected through an earlier path, making this edge the cycle-forming redundant connection.",
            timeComplexity: "O(E · α(V))",
            spaceComplexity: "O(V)",
            keyPattern: "Cycle Detection via DSU",
            companies: ["Google","Amazon"]
          }
        ]
      },
      {
        title: "Shortest paths",
        questions: [
          {
            name: "Network Delay Time",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/network-delay-time/",
            concept: "Dijkstra with min-heap. Relax edges by updating distance[neighbor] if better path found.",
            theory: "Dijkstra's Algorithm finds single-source shortest paths in weighted graphs with non-negative weights. Use a min-heap storing `(dist, u)`. Pop the node with minimum distance; if `dist > distTo[u]`, skip. Otherwise, relax all outgoing edges `(u, v, w)`: if `dist + w < distTo[v]`, update and push.",
            timeComplexity: "O(E log V)",
            spaceComplexity: "O(V + E)",
            keyPattern: "Dijkstra's Shortest Path",
            companies: ["Google","Amazon"]
          },
          {
            name: "Cheapest Flights Within K Stops",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            concept: "Modified Bellman-Ford: run exactly k+1 relaxation rounds. Use copy of dist array to avoid using same-round updates.",
            theory: "Bellman-Ford variant: relaxing all edges across i rounds computes the shortest path using at most i edges. To enforce at most k intermediate stops (k + 1 edges), run exactly k + 1 relaxation rounds, creating a snapshot copy of the distance array at each step to prevent cascading updates within the same round.",
            timeComplexity: "O(k · E)",
            spaceComplexity: "O(V)",
            keyPattern: "Bounded Bellman-Ford Relaxation",
            companies: ["Google","Amazon","Airbnb"]
          },
          {
            name: "Swim in Rising Water",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/swim-in-rising-water/",
            concept: "Dijkstra variant: min-heap, cost = max(current_cost, elevation). Minimize maximum elevation traversed.",
            theory: "Bottleneck Shortest Path problem: find a path from `(0, 0)` to `(n-1, n-1)` minimizing the maximum cell elevation encountered along the path. Use a min-heap storing `(maxElevationSoFar, r, c)`; the first time destination `(n-1, n-1)` is popped from the heap, the answer is guaranteed optimal.",
            timeComplexity: "O(n² log n)",
            spaceComplexity: "O(n²)",
            keyPattern: "Minimax Path Dijkstra Variant",
            companies: ["Google","Amazon"]
          }
        ]
      }
    ]
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: "⬚",
    prereq: "arrays",
    why: "Optimization problems. Often the deciding factor between intern and full-time offers at top companies.",
    sections: [
      {
        title: "1D DP",
        questions: [
          {
            name: "Climbing Stairs",
            tag: "easy",
            leetcode: "https://leetcode.com/problems/climbing-stairs/",
            concept: "dp[i] = dp[i-1] + dp[i-2]. Fibonacci. Can optimise to two variables.",
            theory: "To reach step n, you must arrive from either step n-1 (taking 1 step) or step n-2 (taking 2 steps). Hence, `ways(n) = ways(n-1) + ways(n-2)`. Because state depends only on the last two values, optimize space from O(n) to O(1) using two rolling variables.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "1D State Transition / Fibonacci",
            companies: ["Google","Amazon","Microsoft","Apple"]
          },
          {
            name: "House Robber",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/house-robber/",
            concept: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Cannot rob adjacent houses.",
            theory: "At each house i, you choose between two mutually exclusive decisions: (1) Rob house i and add loot to `dp[i-2]`, or (2) Skip house i and retain `dp[i-1]`. `dp[i] = max(dp[i-1], nums[i] + dp[i-2])`. Space reduces to O(1) using `rob1` and `rob2`.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            keyPattern: "Non-Adjacent Decision DP",
            companies: ["Amazon","Google","Meta","Microsoft"]
          },
          {
            name: "Longest Increasing Subsequence",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
            concept: "O(n²): dp[i] = max(dp[j]+1) for j<i where nums[j]<nums[i]. O(n log n): patience sorting with binary search.",
            theory: "Patience Sorting in O(n log n): maintain an array `tails` where `tails[len]` stores the smallest tail of all increasing subsequences of length `len + 1`. For each `x in nums`, binary search for x in `tails`; if larger than all tails, append x; otherwise replace the first element >= x.",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            keyPattern: "Patience Sorting Binary Search DP",
            companies: ["Amazon","Google","Microsoft","Apple"]
          },
          {
            name: "Word Break",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/word-break/",
            concept: "dp[i] = true if any dp[j] is true and s[j:i] in wordDict. Build from index 0.",
            theory: "Define `dp[i]` as true if prefix `s[0..i]` can be segmented into dictionary words. `dp[i] = true` if there exists some `j < i` such that `dp[j] == true` AND `s[j..i]` is in `wordDict`. Base case: `dp[0] = true` (empty string).",
            timeComplexity: "O(n² · m) where m = max word length",
            spaceComplexity: "O(n)",
            keyPattern: "Prefix Segmentation DP",
            companies: ["Amazon","Meta","Bloomberg","Google"]
          }
        ]
      },
      {
        title: "2D DP",
        questions: [
          {
            name: "Unique Paths",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/unique-paths/",
            concept: "dp[i][j] = dp[i-1][j] + dp[i][j-1]. Optimise to 1D array by updating in-place.",
            theory: "Since robot only moves down or right, paths to cell `(i, j)` arrive exclusively from `(i-1, j)` and `(i, j-1)`. State transition: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. Space optimizes to a single row array of size n updated from left to right.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(n)",
            keyPattern: "Grid Path Combination DP",
            companies: ["Amazon","Google","Microsoft"]
          },
          {
            name: "Longest Common Subsequence",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
            concept: "dp[i][j] = dp[i-1][j-1]+1 if chars match, else max(dp[i-1][j], dp[i][j-1]).",
            theory: "Let `dp[i][j]` be the LCS of prefixes `text1[0..i-1]` and `text2[0..j-1]`. If `text1[i-1] == text2[j-1]`, both characters extend the LCS: `1 + dp[i-1][j-1]`. Otherwise, discard one character: `max(dp[i-1][j], dp[i][j-1])`.",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(min(m, n)) space-optimized",
            keyPattern: "2D String Matching Matrix DP",
            companies: ["Amazon","Google","Microsoft"]
          },
          {
            name: "Edit Distance",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/edit-distance/",
            concept: "dp[i][j] = min(insert, delete, replace). Replace cost: dp[i-1][j-1] + (chars equal ? 0 : 1).",
            theory: "Levenshtein Distance: `dp[i][j]` represents minimum operations to convert `word1[0..i-1]` to `word2[0..j-1]`. If characters match, cost is `dp[i-1][j-1]`. If they differ, choose the minimum of three operations: insert (`dp[i][j-1] + 1`), delete (`dp[i-1][j] + 1`), or replace (`dp[i-1][j-1] + 1`).",
            timeComplexity: "O(m · n)",
            spaceComplexity: "O(min(m, n))",
            keyPattern: "Levenshtein 3-Operation Matrix DP",
            companies: ["Google","Amazon","Microsoft"]
          },
          {
            name: "Coin Change",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/coin-change/",
            concept: "dp[amount] = min coins. For each amount i: dp[i] = min(dp[i-coin]+1) for all coins. Init with Infinity.",
            theory: "Unbounded Knapsack variant: `dp[a]` stores the minimum coins to make amount a. Initialize `dp[0] = 0` and all other amounts to infinity. For each amount from 1 to total, try each coin `c <= a`: `dp[a] = min(dp[a], 1 + dp[a - c])`. Returns -1 if `dp[amount] == Infinity`.",
            timeComplexity: "O(amount · n)",
            spaceComplexity: "O(amount)",
            keyPattern: "Bottom-Up Unbounded Knapsack DP",
            companies: ["Amazon","Microsoft","Meta","Google"]
          }
        ]
      },
      {
        title: "Mastery check",
        questions: [
          {
            name: "0/1 Knapsack",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
            concept: "dp[i][w] = max value using first i items with weight limit w. Optimise to 1D by iterating w backwards.",
            theory: "Partition Equal Subset Sum reduces to 0/1 Knapsack: can we choose a subset summing to `sum / 2`? Each item can be picked at most once. Maintain boolean array `dp[w]` indicating if sum w is achievable. By iterating w backwards from `target` down to `num`, we prevent using the current item multiple times.",
            timeComplexity: "O(n · target)",
            spaceComplexity: "O(target)",
            keyPattern: "0/1 Knapsack Reverse 1D Array",
            companies: ["Amazon","Google","Microsoft"]
          },
          {
            name: "Longest Palindromic Substring",
            tag: "medium",
            leetcode: "https://leetcode.com/problems/longest-palindromic-substring/",
            concept: "Expand around every center (n centers for odd, n-1 for even). O(n²) time, O(1) space.",
            theory: "Every palindrome is symmetrical around its center. There are 2n - 1 possible centers (n single-character centers for odd-length palindromes, n - 1 between-character centers for even-length palindromes). Expanding outward while characters match takes O(1) auxiliary space.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            keyPattern: "Center Expansion Invariant",
            companies: ["Amazon","Microsoft","Google"]
          },
          {
            name: "Burst Balloons",
            tag: "hard",
            leetcode: "https://leetcode.com/problems/burst-balloons/",
            concept: "Interval DP: think of k as the LAST balloon burst in range [l,r]. dp[l][r] = max(nums[l-1]*nums[k]*nums[r+1] + dp[l][k-1] + dp[k+1][r]).",
            theory: "Thinking of the first balloon to burst creates interdependent subproblems. Inverting the perspective: consider balloon k as the LAST balloon burst in interval `(left, right)`. Because k is last, its adjacent boundaries at burst time are strictly `nums[left]` and `nums[right]`, decoupling the left and right subproblems into independent interval DP.",
            timeComplexity: "O(n³)",
            spaceComplexity: "O(n²)",
            keyPattern: "Inverted Interval DP",
            companies: ["Google","Amazon","Samsung"]
          }
        ]
      }
    ]
  }
];
